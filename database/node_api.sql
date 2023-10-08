-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2023 at 10:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Rahul Shah', 'rjshah1902@gmail.com', '12345', 1, '2023-09-25 01:33:29', '2023-09-25 01:33:29'),
(2, 'Rahul Shah 2', 'rjshah1901@gmail.com', '12345', 1, '2023-09-27 22:25:13', '2023-09-27 22:25:13'),
(3, 'Rahul Shah 2', 'rjshah1901@gmail.com', '12345', 0, '2023-09-27 22:25:36', '2023-09-27 22:25:36'),
(4, 'Rahul Shah 2', 'rjshah1901@gmail.com', '12345', 0, '2023-09-27 22:25:44', '2023-09-27 22:25:44'),
(5, 'Rahul Shah 2', 'rjshah1901@gmail.com', '12345', 0, '2023-09-27 22:26:14', '2023-09-27 22:26:14'),
(6, 'Rahul Shah 2', 'rjshah1901@gmail.com', '12345', 0, '2023-09-27 22:26:15', '2023-09-27 22:26:15'),
(7, 'Rj Shah', 'rjshah0301@gmail.com', '12345', 0, '2023-09-27 22:26:47', '2023-09-27 22:26:47'),
(8, 'Rj Shah', 'rjshah0301@gmail.com', '12345', 0, '2023-09-27 22:27:53', '2023-09-27 22:27:53'),
(9, 'Baby Girl', 'baby@gmail.com', '12345', 1, '2023-10-02 16:46:58', '2023-10-02 16:46:58'),
(10, 'Baby Girl', 'baby@gmail.com', 'undefined', 1, '2023-10-02 16:54:06', '2023-10-02 16:54:06'),
(11, 'Baby Girl', 'baby@gmail.com', '12345', 1, '2023-10-02 16:54:42', '2023-10-02 16:54:42'),
(12, 'Baby Girl', 'baby1@gmail.com', '12345', 1, '2023-10-02 17:04:48', '2023-10-02 17:04:48'),
(13, 'Baby Girl', 'baby2@gmail.com', '12345', 1, '2023-10-02 17:05:30', '2023-10-02 17:05:30'),
(14, 'Baby Girl', 'baby3@gmail.com', '12345', 1, '2023-10-02 17:06:08', '2023-10-02 17:06:08'),
(15, 'Baby Girl', 'baby4@gmail.com', '12345', 1, '2023-10-02 17:06:21', '2023-10-02 17:06:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
