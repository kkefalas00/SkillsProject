-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Εξυπηρετητής: 127.0.0.1
-- Χρόνος δημιουργίας: 20 Απρ 2022 στις 12:44:18
-- Έκδοση διακομιστή: 10.4.22-MariaDB
-- Έκδοση PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Βάση δεδομένων: `skills`
--

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `admin`
--

CREATE TABLE `admin` (
  `adid` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `ps` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `answer`
--

CREATE TABLE `answer` (
  `ansid` int(11) NOT NULL,
  `anstitle` text DEFAULT NULL,
  `ranswer` varchar(11) DEFAULT NULL,
  `qid` int(11) DEFAULT NULL,
  `ansr` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `lesson`
--

CREATE TABLE `lesson` (
  `lid` int(11) NOT NULL,
  `ltitle` varchar(100) DEFAULT NULL,
  `tid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `lesson_student`
--

CREATE TABLE `lesson_student` (
  `lid` int(11) DEFAULT NULL,
  `stid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `question`
--

CREATE TABLE `question` (
  `testid` int(11) DEFAULT NULL,
  `qid` int(11) NOT NULL,
  `qtitle` text DEFAULT NULL,
  `question_type` varchar(150) DEFAULT NULL,
  `ans1` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `question_answer`
--

CREATE TABLE `question_answer` (
  `ansid` int(11) DEFAULT NULL,
  `qid` int(11) DEFAULT NULL,
  `stid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `student`
--

CREATE TABLE `student` (
  `stid` int(11) NOT NULL,
  `fname` varchar(100) DEFAULT NULL,
  `stemail` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `teacher`
--

CREATE TABLE `teacher` (
  `tid` int(11) NOT NULL,
  `fname` varchar(100) DEFAULT NULL,
  `occupation` varchar(100) DEFAULT NULL,
  `temail` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `test`
--

CREATE TABLE `test` (
  `testid` int(11) NOT NULL,
  `testtitle` varchar(100) DEFAULT NULL,
  `unid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `test_student`
--

CREATE TABLE `test_student` (
  `testid` int(11) DEFAULT NULL,
  `stid` int(11) DEFAULT NULL,
  `testdate` date DEFAULT NULL,
  `testgrade` float(6,4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `units`
--

CREATE TABLE `units` (
  `unid` int(11) NOT NULL,
  `untitle` varchar(100) DEFAULT NULL,
  `lid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Ευρετήρια για άχρηστους πίνακες
--

--
-- Ευρετήρια για πίνακα `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`adid`);

--
-- Ευρετήρια για πίνακα `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`ansid`),
  ADD KEY `qid` (`qid`);

--
-- Ευρετήρια για πίνακα `lesson`
--
ALTER TABLE `lesson`
  ADD PRIMARY KEY (`lid`),
  ADD KEY `lesson_ibfk_1` (`tid`);

--
-- Ευρετήρια για πίνακα `lesson_student`
--
ALTER TABLE `lesson_student`
  ADD KEY `lesson_student_ibfk_1` (`lid`),
  ADD KEY `lesson_student_ibfk_2` (`stid`);

--
-- Ευρετήρια για πίνακα `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`qid`),
  ADD KEY `question_ibfk_1` (`testid`);

--
-- Ευρετήρια για πίνακα `question_answer`
--
ALTER TABLE `question_answer`
  ADD KEY `question_answer_ibfk_1` (`ansid`),
  ADD KEY `question_answer_ibfk_2` (`qid`),
  ADD KEY `stid` (`stid`);

--
-- Ευρετήρια για πίνακα `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`stid`);

--
-- Ευρετήρια για πίνακα `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`tid`);

--
-- Ευρετήρια για πίνακα `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`testid`),
  ADD KEY `test_ibfk_1` (`unid`);

--
-- Ευρετήρια για πίνακα `test_student`
--
ALTER TABLE `test_student`
  ADD KEY `test_student_ibfk_1` (`testid`),
  ADD KEY `test_student_ibfk_2` (`stid`);

--
-- Ευρετήρια για πίνακα `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`unid`),
  ADD KEY `units_ibfk_1` (`lid`);

--
-- AUTO_INCREMENT για άχρηστους πίνακες
--

--
-- AUTO_INCREMENT για πίνακα `admin`
--
ALTER TABLE `admin`
  MODIFY `adid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT για πίνακα `answer`
--
ALTER TABLE `answer`
  MODIFY `ansid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT για πίνακα `lesson`
--
ALTER TABLE `lesson`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT για πίνακα `question`
--
ALTER TABLE `question`
  MODIFY `qid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT για πίνακα `student`
--
ALTER TABLE `student`
  MODIFY `stid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT για πίνακα `teacher`
--
ALTER TABLE `teacher`
  MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT για πίνακα `test`
--
ALTER TABLE `test`
  MODIFY `testid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT για πίνακα `units`
--
ALTER TABLE `units`
  MODIFY `unid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Περιορισμοί για άχρηστους πίνακες
--

--
-- Περιορισμοί για πίνακα `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`qid`) REFERENCES `question` (`qid`);

--
-- Περιορισμοί για πίνακα `lesson`
--
ALTER TABLE `lesson`
  ADD CONSTRAINT `lesson_ibfk_1` FOREIGN KEY (`tid`) REFERENCES `teacher` (`tid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `lesson_student`
--
ALTER TABLE `lesson_student`
  ADD CONSTRAINT `lesson_student_ibfk_1` FOREIGN KEY (`lid`) REFERENCES `lesson` (`lid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lesson_student_ibfk_2` FOREIGN KEY (`stid`) REFERENCES `student` (`stid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`testid`) REFERENCES `test` (`testid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `question_answer`
--
ALTER TABLE `question_answer`
  ADD CONSTRAINT `question_answer_ibfk_1` FOREIGN KEY (`ansid`) REFERENCES `answer` (`ansid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `question_answer_ibfk_2` FOREIGN KEY (`qid`) REFERENCES `question` (`qid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `question_answer_ibfk_3` FOREIGN KEY (`stid`) REFERENCES `student` (`stid`);

--
-- Περιορισμοί για πίνακα `test`
--
ALTER TABLE `test`
  ADD CONSTRAINT `test_ibfk_1` FOREIGN KEY (`unid`) REFERENCES `units` (`unid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `test_student`
--
ALTER TABLE `test_student`
  ADD CONSTRAINT `test_student_ibfk_1` FOREIGN KEY (`testid`) REFERENCES `test` (`testid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `test_student_ibfk_2` FOREIGN KEY (`stid`) REFERENCES `student` (`stid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `units`
--
ALTER TABLE `units`
  ADD CONSTRAINT `units_ibfk_1` FOREIGN KEY (`lid`) REFERENCES `lesson` (`lid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
