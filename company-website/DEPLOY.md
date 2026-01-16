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

---

## 其他方式

### Vercel (雲端託管)
如果你改變主意想用雲端託管，Vercel 是最簡單的選擇：
1. 將程式碼推送到 GitHub。
2. 在 Vercel 匯入專案。
3. 在 Vercel 設定頁面填入環境變數。
4. 自動部署完成。
