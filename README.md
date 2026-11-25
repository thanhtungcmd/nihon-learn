# nihon-learning

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Đăng nhập AWS

App không đọc khóa AWS từ `.env`. Khi mở app sẽ có màn **Đăng nhập AWS** yêu cầu nhập:

- `AWS_REGION` (ví dụ `ap-southeast-2`)
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

App gọi thử Polly (`DescribeVoices`); thành công mới vào nội dung. Khóa được lưu trong `localStorage` của trình duyệt, bấm nút đăng xuất ở thanh bên để xóa.

Nên dùng IAM user chỉ có quyền `polly:DescribeVoices`, `polly:SynthesizeSpeech` và `translate:TranslateText`.

## Deploy lên Vercel

1. Push code lên GitHub (cần có [vercel.json](./vercel.json) để reload các trang con như `/n5/unit1` không bị 404).
2. Vào <https://vercel.com/new>, import repo này. Vercel tự nhận Vite (build: `npm run build`, output: `dist`).
3. Bấm **Deploy**. Mỗi lần push sau sẽ tự deploy lại.

### Hoặc deploy bằng Vercel CLI

```sh
npm i -g vercel     # cài CLI (một lần)
vercel login        # đăng nhập tài khoản Vercel
vercel              # lần đầu: hỏi liên kết project, tạo bản preview
vercel --prod       # deploy bản production
```

CLI upload source rồi build trên Vercel nên không cần build ở máy. [.vercelignore](./.vercelignore) chặn upload `.env`, `node_modules`, `dist`.

> Không thêm biến `VITE_AWS_*` vào Environment Variables trên Vercel: biến `VITE_` bị đóng gói vào bundle công khai. Người dùng nhập khóa ở màn đăng nhập.
