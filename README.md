# Personal Portfolio Website

這是一個使用 **Vue 3 + TypeScript + Vite + Tailwind CSS** 建置的個人作品集網站。這份文件會教您如何在不同電腦上安裝並啟動此專案。

## 📋 事前準備 (Prerequisites)

在新電腦開始之前，請確認您的電腦已安裝：

1.  **Node.js** (建議版本 v18 或以上): [下載連結](https://nodejs.org/)
2.  **Git**: [下載連結](https://git-scm.com/)

---

## 💻 如何在新電腦上安裝 (Setup)

如果您更換了電腦，請依照以下步驟將專案抓下來：

### 1. 下載專案 (Clone)
打開終端機 (Terminal) 或命令提示字元 (CMD)，執行：

```bash
git clone https://github.com/kelly0518/personal-website.git
```

### 2. 進入專案資料夾
```bash
cd personal-website
```

### 3. 安裝依賴套件 (Install Dependencies)
這一步非常重要，它會根據 `package.json` 下載所有需要的程式庫 (如 Vue, Tailwind 等)。
```bash
npm install
```

---

## 🚀 專案啟動指令 (Development)

每次您要開始編輯或預覽網站時，請執行此指令：

### 啟動開發伺服器 (Start Dev Server)
```bash
npm run dev
```
執行後，打開瀏覽器訪問 http://localhost:5173 即可看到網站。

---

## 📦 其他指令

### 建立部署檔案 (Build)
當您完成所有修改準備上線時：
```bash
npm run build
```

---

## 📚 版本控制
關於如何將修改後的內容推送到 GitHub，請參考專案中的 **[GIT_GUIDE.md](./GIT_GUIDE.md)** 文件。
