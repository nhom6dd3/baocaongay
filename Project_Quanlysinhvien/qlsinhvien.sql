-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 10, 2018 lúc 07:00 AM
-- Phiên bản máy phục vụ: 10.1.36-MariaDB
-- Phiên bản PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qlsinhvien`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `diem`
--

CREATE TABLE `diem` (
  `masv` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mamon` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lythuyet` float NOT NULL,
  `thuchanh` float NOT NULL,
  `kiemtra` float NOT NULL,
  `tbmon` float NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `diem`
--

INSERT INTO `diem` (`masv`, `mamon`, `lythuyet`, `thuchanh`, `kiemtra`, `tbmon`, `id`) VALUES
('SV003', 'PL', 5, 5, 5, 5, 56),
('SV003', 'THDC', 5, 5, 5, 5, 57),
('SV001', 'PL', 6, 6, 6, 6, 59),
('sv001', 'PL', 6, 6, 6, 6, 60),
('SV001', 'PL', 5, 5, 5, 5, 61),
('SV002', 'TDC', 7, 7, 7, 7, 62),
('SV004', 'THDC', 6, 6, 6, 6, 63),
('SV003', 'KTLT', 5, 5, 5, 5, 64),
('SV036', 'KTLT', 5, 5, 5, 5, 65);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `monhoc`
--

CREATE TABLE `monhoc` (
  `mamon` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tenmon` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `monhoc`
--

INSERT INTO `monhoc` (`mamon`, `tenmon`) VALUES
('CTDL', 'Cấu trúc dữ liệu'),
('KTLT', 'Kỹ thuật lập trình '),
('PL', 'Pháp luật '),
('PLLY', 'TTGG'),
('TDC', 'Toán đại cương'),
('THDC', 'Tin học đại cương'),
('XSTK', 'Xác suất thống kê');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sinhvien`
--

CREATE TABLE `sinhvien` (
  `hoten` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `masinhvien` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngaysinh` date NOT NULL,
  `gioitinh` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diachi` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `khoa` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lop` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `khoahoc` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sinhvien`
--

INSERT INTO `sinhvien` (`hoten`, `masinhvien`, `ngaysinh`, `gioitinh`, `diachi`, `khoa`, `lop`, `khoahoc`) VALUES
('Phạm Thị Ha ', 'SV001', '1995-12-03', 'Nữ', 'Tpphcm', 'Công nghệ thông tin ', 'CD15TT8', '2015'),
('Lưu bá thông ', 'SV002', '1995-02-03', 'Nam', 'Tphcm', 'CNTT', 'Cd15tt4', '2016'),
('Phạm nhật hoang', 'SV003', '1994-11-02', 'Nam', 'Tphcm', 'Cơ kh´động lực ', 'CKDL', '2015'),
('Phạm thị Nữ', 'SV004', '2000-11-11', 'Nữ', 'Ha nội', 'Kế toán', 'KT006', '2013'),
('Phạm an ', 'SV009', '1995-00-00', 'Nam', 'Quận ha đông - ha nội ', 'CNTT', 'cd15tt7', '2016'),
('PHAM A', 'SV036', '1995-03-06', 'Nam', 'tphcm', 'kt', 'kt15', '2015');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `id` int(11) NOT NULL,
  `hoten` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tendangnhap` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `matkhau` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `chucvu` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`id`, `hoten`, `tendangnhap`, `matkhau`, `chucvu`) VALUES
(1, 'Nguyen Huu Phu', 'admin', 'admin', 'admin'),
(2, 'Nguyen Van A', 'user', 'user', 'user'),
(9, 'Viáº¿ Ä‘áº¡i', 'SV001', 'SV001', 'admin'),
(10, 'SV002', 'SV002', 'SV002', 'admin'),
(11, 'huuphu', 'phu', '123', 'sinh vien');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `diem`
--
ALTER TABLE `diem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `masv` (`masv`),
  ADD KEY `mamon` (`mamon`);

--
-- Chỉ mục cho bảng `monhoc`
--
ALTER TABLE `monhoc`
  ADD PRIMARY KEY (`mamon`);

--
-- Chỉ mục cho bảng `sinhvien`
--
ALTER TABLE `sinhvien`
  ADD PRIMARY KEY (`masinhvien`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `diem`
--
ALTER TABLE `diem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
