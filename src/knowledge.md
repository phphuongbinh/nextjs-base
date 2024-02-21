# Routes

- index routes -> index.tsx
- nested routes -> /blog/blog-details
- Dynamic routes -> property/1 | /blog/[id], /blog/[slug]
- Link
- Link URL Object
- Route có đường dẫn tên cụ thể sẽ ưu tiên hơn slug

# next/image

- Tại sao cần sử dụng next/image? ->Nên sử dụng để hình ảnh được tối ưu
- Cách sử dụng local images
- Tại sao next/image yêu cầu sử dụng width và height(CLS)
- LQIP
- placeholder image
- Remote image
- Nếu không biết width và height thì sử dụng ra sao?
- Cách resposive hình ảnh với fill và lưu ý
  - Thuộc tính 'fill' và 'width' 'height' không được sử dụng chung với nhau
  - Khi dùng nên set phần tử cha là 'relative', 'absolute' hoặc 'fixed'
- Tìm hiểu srcset và sizes trong next/image
- quality : Chất lượng ảnh, mặc định là 75
- priority: true -> dùng cho tấm ảnh nằm trong viewport, khi sử dụng thì sẽ không dùng được loading ="lazy"
- Thêm loading="lazy" vào những tấm ảnh nằm ngoài viewport , giúp trang web giảm tải load những tấm ảnh không cần thiết
- Khi sử dụng placeholder="blur" thì static image import đã có sẵn, tuy nhiên đối với remote images thì phải tự xử lý thuộc tính blurDataURL với thư viện được next giới thiệu là placeholder
