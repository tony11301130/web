export interface Product {
    id: string;
    name: string;
    description: string;
    features: string[];
}

export const products: Product[] = [
    {
        id: "owl",
        name: "OWL 單向閘道",
        description: "OWL Cyber Defense 是全球領先的單向網閘解決方案，確保關鍵基礎設施與 OT 網路的絕對安全。",
        features: [
            "硬體式單向傳輸",
            "軍規級安全認證",
            "廣泛支援各種工業協議 (OPC, Modbus 等)",
            "防止網路攻擊與資料外洩"
        ]
    },
    {
        id: "fidelis",
        name: "Fidelis 網路安全",
        description: "全方位的自動化偵測與回應平台 (XDR)，涵蓋網路、端點與雲端環境。",
        features: [
            "深度封包檢測 (DPI)",
            "自動化威脅獵捕",
            "資料外洩防護 (DLP)",
            "即時事件回應"
        ]
    },
    {
        id: "fudo",
        name: "Fudo PAM",
        description: "次世代特權存取管理 (PAM) 解決方案，提供無代理程式的監控與錄影功能。",
        features: [
            "AI 異常行為偵測",
            "即時連線監控與阻斷",
            "全程高解析度錄影",
            "快速部署 (One Day One Rack)"
        ]
    },
    {
        id: "custom",
        name: "客製化資安方案",
        description: "針對企業特殊需求，提供量身打造的資安防護架構與顧問服務。",
        features: [
            "資安健診與評估",
            "合規性諮詢 (ISO 27001, IEC 62443)",
            "資安架構規劃",
            "滲透測試服務"
        ]
    }
];
