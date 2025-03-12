# Check-supabase-usage
Kiểm tra trạng thái dung lượng supabase cho website interview

## 📌 Tổng quan

Công cụ tự động giám sát dung lượng cơ sở dữ liệu Supabase cho các dự án của bạn và gửi cảnh báo kịp thời khi gần đạt giới hạn miễn phí.

## ✨ Tính năng

- ⏱️ Giám sát tự động mỗi 6 giờ
- 🚨 Cảnh báo qua Zapier khi cơ sở dữ liệu tiến gần 450MB (giới hạn gói miễn phí là 500MB)
- 🔄 Tự động hóa với GitHub Actions
- 🔒 Quản lý thông tin xác thực an toàn thông qua GitHub Secrets

## 🔧 Hướng dẫn cài đặt

### Yêu cầu
- Tài khoản GitHub
- Dự án Supabase
- Tài khoản Zapier (để nhận thông báo)

### Các bước cấu hình

1. **Fork hoặc clone repository này**

2. **Thiết lập GitHub Secrets**
   
   Vào repository Settings → Secrets and variables → Actions → New repository secret
   
   Thêm các secrets sau:
   - `SUPABASE_PROJECT_ID` - ID dự án Supabase của bạn
   - `SUPABASE_ACCESS_TOKEN` - Access token Supabase của bạn
   - `ZAPIER_WEBHOOK_URL` - URL webhook Zapier của bạn để nhận thông báo

3. **Cấu hình Zapier**
   
   Tạo một webhook trong Zapier có thể nhận yêu cầu POST và thiết lập phương thức thông báo mong muốn (email, Slack, Discord, v.v.)

## 🚀 Cách hoạt động

1. GitHub Action chạy theo lịch (mỗi 6 giờ) hoặc có thể kích hoạt thủ công
2. Script kết nối với Supabase API để kiểm tra dung lượng cơ sở dữ liệu
3. Nếu kích thước vượt quá 450MB, một cảnh báo sẽ được gửi đến Zapier
4. Zapier kích hoạt quy trình thông báo đã cấu hình

## 💻 Phát triển cục bộ

Để chạy dự án này trên máy local:

```bash
# Clone repository
git clone https://github.com/huyduc1602/Check-supabase-usage.git

# Cài đặt dependencies
npm install

# Thiết lập biến môi trường
export SUPABASE_PROJECT_ID=your_project_id
export SUPABASE_ACCESS_TOKEN=your_access_token
export ZAPIER_WEBHOOK_URL=your_webhook_url

# Chạy script
node check_supabase_usage.js
