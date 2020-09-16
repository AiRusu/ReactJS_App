-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2020 at 11:35 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `disertatie`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacte`
--

CREATE TABLE `contacte` (
  `id` int(11) NOT NULL,
  `numePrenume` varchar(50) CHARACTER SET utf8 NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 NOT NULL,
  `optiune` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contacte`
--

INSERT INTO `contacte` (`id`, `numePrenume`, `email`, `optiune`) VALUES
(1, 'Carmina Chitu', 'carmina.chitu@gmail.com', 'VitalCare'),
(3, 'Alex Calugareanu', 'alex.calugareanu@gmail.com', 'TakeCare'),
(4, 'Claudiu Moldovan', 'claudiu.moldovan@gmail.com', 'CompleteCare'),
(7, 'Mircea Pop', 'dwqjdq@gmail.com', 'TakeCare'),
(8, 'Aida Rusu', 'aida.rusu93@gmail.com', 'VitalCare'),
(9, 'Alina Pop', 'dwqjdq@gmail.com', 'TakeCare'),
(11, 'Gabriela Pop', 'Pop@jhdgbejs.com', 'CompleteCare'),
(12, 'Paula Tripon', 'ddwqd@gmmail.com', 'TakeCare'),
(13, 'Fabian Dumitru', 'djhdccx@jhdbsxc.com', 'CompleteCare');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacte`
--
ALTER TABLE `contacte`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacte`
--
ALTER TABLE `contacte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
