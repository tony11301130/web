# Deployment Guide

本專案支援多種部署方式，針對地端 (On-Premise) 部署，建議使用 **Docker** 以確保環境一致性。

## Docker 部署 (推薦)

### 1. 前置準備
請確保您的伺服器已安裝 [Docker Engine](https://docs.docker.com/engine/install/)。

### 2. 建置映像檔 (Build Image)
在專案根目錄執行以下指令：

```bash
docker build -t company-website .
```

### 3. 執行容器 (Run Container)

你需要提供 `NOTION_TOKEN` 與 `NOTION_DATABASE_ID` 環境變數才能讓網站正常運作。

#### 方法 A：直接在指令中代入 (快速測試用)
將 `<YOUR_TOKEN>` 與 `<YOUR_DB_ID>` 替換為實際數值：

```bash
docker run -d -p 3000:3000 \
  -e NOTION_TOKEN="<YOUR_TOKEN>" \
  -e NOTION_DATABASE_ID="<YOUR_DB_ID>" \
  --name website \
  company-website
```

#### 方法 B：使用環境變數檔案 (正式部署推薦)
1. 建立一個 `.env.production` 檔案，內容如下：
   ```env
   NOTION_TOKEN=你的真實Token
   NOTION_DATABASE_ID=你的真實Database_ID
   ```
2. 執行指令並掛載檔案：
   ```bash
   docker run -d -p 3000:3000 \
     --env-file .env.production \
     --name website \
     company-website
   ```

### 4. 驗證
容器啟動後，開啟瀏覽器訪問 `http://localhost:3000` (或您伺服器的 IP)。

### 管理指令
- **停止服務**: `docker stop website`
- **刪除容器**: `docker rm website`
- **查看日誌**: `docker logs -f website`

### 5. 進階：啟用 HTTPS (Production Ready)

為您的網站加上 HTTPS 是正式上線的標準配置。要在 Docker 環境中實現 HTTPS，最簡單與現代化的方式是使用 **反向代理 (Reverse Proxy)**，這不需要修改您的網站程式碼。

#### 方案 A：使用 Caddy (最推薦 - 自動化憑證)
[Caddy](https://caddyserver.com/) 是一個現代化的 Web Server，它能**自動申請並更新** Let's Encrypt 的免費 SSL 憑證。我們可以使用 Docker Compose 來一次管理網站與 Caddy。

**步驟：**
1. 確保您擁有一個網域名稱 (例如 `your-company.com`) 並已指向伺服器 IP。
2. 建立 `docker-compose.yml` 檔案：

```yaml
version: '3'

services:
  website:
    image: company-website  # 您的映像檔名稱
    restart: always
    env_file: .env.production
    # 注意：這裡不需要 ports，因為透過 Caddy 轉發

  caddy:
    image: caddy:latest
    restart: always
    ports:
      - "80:80"   # HTTP
      - "443:443" # HTTPS
    # 將 example.com 替換為您的真實網域
    command: caddy reverse-proxy --from example.com --to website:3000
```

3. 啟動服務：
```bash
docker-compose up -d
```
Caddy 會自動處理憑證申請，您的網站即刻擁有 HTTPS 保護。

#### 方案 B：使用 Nginx (手動管理)
若您習慣使用 Nginx，需自行準備憑證 (`.crt`, `.key`)：
1. 編寫 `nginx.conf` 設定檔，設定 SSL 與 `proxy_pass http://website:3000`。
2. 將憑證檔案與設定檔掛載至 Nginx 容器中。

#### 方案 C：使用外部負載平衡器 (Load Balancer)
適用於 AWS/GCP 或企業內部環境：
1. Docker 容器只需以 HTTP (Port 3000) 執行。
2. 在雲端 Load Balancer (ALB/GCLB) 或硬體設備 (如 F5) 上掛載憑證。
3. 將流量轉發至 Docker 容器。

---

## 其他方式

### Vercel (雲端託管)
如果你改變主意想用雲端託管，Vercel 是最簡單的選擇：
1. 將程式碼推送到 GitHub。
2. 在 Vercel 匯入專案。
3. 在 Vercel 設定頁面填入環境變數。
4. 自動部署完成。
