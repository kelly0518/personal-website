# Git 版本控制操作指南

當您完成一個段落的工作（例如改完一個頁面）並希望備份到 GitHub 時，請依序執行以下三個指令：

## 1. 加入檔案 (Git Add)
告訴 Git 這次要備份哪些檔案（`.` 代表全部檔案）。

```bash
git add .
```

## 2. 確認版本 (Git Commit)
將這些檔案存成一個「版本」，並寫下備註（把引號內的文字改成您實際做了什麼）。

```bash
git commit -m "這裡寫下您改了什麼"
```

## 3. 推送上傳 (Git Push)
將這個版本上傳到 GitHub 雲端備份。

```bash
git push
```

---

### 其他常用指令

*   **查看狀態**：想知道哪些檔案被改過，但還沒 Add 時。
    ```bash
    git status
    ```

*   **下載專案**：如果在別台電腦，要從雲端下載下來。
    ```bash
    git clone https://github.com/kelly0518/personal-website.git
    ```
