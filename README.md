# Ứng dụng Phong Thủy Lê Gia với Thần Số Học

Ứng dụng phân tích phong thủy và thần số học toàn diện, bao gồm cung mệnh, hướng nhà, năm/tháng xây dựng, và phân tích thần số học cá nhân.

## Tính năng chính

### 1. Phân tích Phong Thủy
- **Cung mệnh**: Tính toán cung mệnh dựa trên ngày sinh và giới tính
- **Bát Trạch**: Phân tích 8 hướng tốt xấu cho từng cung
- **Thời điểm xây dựng**: Kiểm tra Kim Lâu, Hoang Ốc, Tam Tai, Xung tuổi
- **Môi trường**: Hơn 50 lỗi phong thủy thường gặp và cách hóa giải
- **La bàn số**: Xác định hướng nhà bằng cảm biến thiết bị

### 2. Thần Số Học (Mới)
- **Số chủ đạo (Life Path)**: Tính từ ngày sinh, thể hiện đường đời
- **Số biểu hiện (Expression)**: Tính từ tên đầy đủ, thể hiện tài năng
- **Số tâm hồn (Soul)**: Tính từ nguyên âm trong tên, thể hiện mong muốn nội tâm
- **Số nhân cách (Personality)**: Tính từ phụ âm trong tên, thể hiện hình ảnh bên ngoài
- **Năm cá nhân**: Phân tích chu kỳ năm hiện tại
- **Tương thích tình yêu**: Kiểm tra độ hòa hợp giữa hai người

### 3. Quản lý hồ sơ
- Lưu trữ thông tin khách hàng và bất động sản
- Tìm kiếm và xuất file CSV
- Phân tích AI tự động

## Cách sử dụng

### Khởi động ứng dụng
```bash
npm install
npm start
```
Truy cập: http://localhost:3000

### Phân tích Phong Thủy
1. Nhập thông tin khách hàng (họ tên, SĐT, ngày sinh, giới tính)
2. Chọn hướng nhà/đất và thời gian xây dựng
3. Nhập thông tin bất động sản (địa chỉ, tờ thửa, giá...)
4. Chọn các lỗi môi trường (nếu có)
5. Nhấn "Phân tích phong thủy"

### Phân tích Thần Số Học
1. Nhập đầy đủ họ tên và ngày sinh
2. Nhấn "Phân tích thần số học"
3. Xem kết quả các con số quan trọng:
   - Số chủ đạo: Đường đời và sứ mệnh
   - Số biểu hiện: Tài năng và khả năng
   - Số tâm hồn: Mong muốn sâu thẳm
   - Số nhân cách: Hình ảnh bên ngoài
   - Năm cá nhân: Chu kỳ năm hiện tại

### Kiểm tra tương thích tình yêu
1. Hoàn thành phân tích thần số học cho bản thân
2. Trong phần "Tương thích tình yêu", nhập tên và ngày sinh bạn đời
3. Nhấn "Kiểm tra tương thích"
4. Xem kết quả và lời khuyên

## Ý nghĩa các con số chủ đạo

### Số 1 - Người Lãnh Đạo
- Tính cách: Độc lập, quyết đoán, có tính lãnh đạo
- Nghề nghiệp: Lãnh đạo, doanh nhân, giám đốc
- Màu may mắn: Đỏ, Cam, Vàng

### Số 2 - Người Hòa Hợp  
- Tính cách: Nhạy cảm, hòa đồng, thích hợp tác
- Nghề nghiệp: Ngoại giao, tư vấn, giáo dục
- Màu may mắn: Xanh dương, Bạc, Trắng

### Số 3 - Người Sáng Tạo
- Tính cách: Vui vẻ, sáng tạo, giao tiếp tốt
- Nghề nghiệp: Nghệ sĩ, nhà văn, thiết kế
- Màu may mắn: Vàng, Cam, Tím

### Số 4 - Người Thực Tế
- Tính cách: Thực tế, chăm chỉ, có tổ chức
- Nghề nghiệp: Kỹ sư, kế toán, xây dựng
- Màu may mắn: Xanh lá, Nâu, Xám

### Số 5 - Người Tự Do
- Tính cách: Thích phiêu lưu, tự do, năng động
- Nghề nghiệp: Du lịch, báo chí, bán hàng
- Màu may mắn: Xanh dương, Bạc, Đỏ

### Số 6 - Người Nuôi Dưỡng
- Tính cách: Trách nhiệm, quan tâm gia đình
- Nghề nghiệp: Giáo dục, y tế, tư vấn
- Màu may mắn: Hồng, Xanh lá, Xanh dương

### Số 7 - Người Tìm Kiếm
- Tính cách: Thích tư duy, phân tích sâu
- Nghề nghiệp: Nghiên cứu, khoa học, tâm linh
- Màu may mắn: Tím, Xanh dương đậm, Bạc

### Số 8 - Người Thành Đạt
- Tính cách: Tham vọng, có khả năng kinh doanh
- Nghề nghiệp: Kinh doanh, tài chính, quản lý
- Màu may mắn: Đen, Xám, Nâu đậm

### Số 9 - Người Nhân Đạo
- Tính cách: Rộng lượng, từ bi, giúp đỡ người khác
- Nghề nghiệp: Từ thiện, giáo dục, nghệ thuật
- Màu may mắn: Vàng, Cam, Đỏ

### Số đặc biệt: 11, 22, 33
- **Số 11**: Người truyền cảm hứng, trực giác mạnh
- **Số 22**: Người kiến tạo, biến ý tưởng thành hiện thực  
- **Số 33**: Người thầy, khả năng chữa lành đặc biệt

## Tương thích tình yêu

### Rất tốt
- 1 với 3, 5, 6
- 2 với 2, 4, 8
- 3 với 1, 5, 7
- 6 với 2, 3, 9

### Khó khăn
- 1 với 4
- 2 với 5
- 3 với 4
- 4 với 1, 3, 5

## Công nghệ sử dụng

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express
- **Lưu trữ**: LocalStorage (client-side)
- **Font**: Be Vietnam Pro
- **API**: Mock AI analysis

## Tác giả

Phong Thủy Lê Gia - Ứng dụng phân tích phong thủy và thần số học chuyên nghiệp.

---

*Lưu ý: Tất cả thông tin chỉ mang tính tham khảo và giải trí.*
