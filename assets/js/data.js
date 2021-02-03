let interests = [];
let skills = [];
let projects = [];
let experiences = [];
let educations = [];
let certificates = [];
let referencePersons = [];

let shortTarget = "Phải vượt qua được vòng phỏng vấn và trở thành nhân viên chính thức của công ty. Luyện anh văn thành thạo trong 6 tháng. Phải hoàn thành tốt các nhiệm vụ và trở thành Junior trong 3 tháng và rèn luyện các kỹ năng và kiến thức đầy đủ, vững vàng để trở thành Senior trong 24 tháng tiếp theo.";
let longTarget = "Tham gia vào nhiều dự án tầm trung và lớn để phát triển thêm các kiến thức và kỹ năng lãnh đạo để trở thành Leader trong 4 năm gắn bó với công ty và thành Manager trong 2 năm tiếp theo.";
let introduce = "Là một người có niềm đam mê lớn với lập trình, thích được tư duy để giải quyết bài toán. Có khả năng tự tìm kiếm và học tập khá cao. Là một người trung thực, ham học hỏi cái mới, có tính kiên trì.";

var person = {}

person.id = 1;
person.avatar = "assets/images/avtcv.jpeg";
person.name = "Đỗ Chánh Tín";
person.dob = "07/04/1995";
person.phone = "0966 257 540";
person.email = "dochanhtin07041995@gmail.com"
person.address = "Hương Chữ - Hương Trà - Thừa Thiên Huế";
person.facebook = "http://bit.ly/3cfsHG1";
person.instagram = "https://bit.ly/2NAwfZ0";
person.gitHub = "http://bit.ly/35VmV8x";
person.qrCode = "assets/img/CVOffline.png";
person.shortTarget = shortTarget;
person.longTarget = longTarget;
person.introduce = introduce;

let interest_football = new Interest(1, "Football", "assets/img/football.png", 1);
let interest_lol = new Interest(2, "League Of Legends", "assets/img/lol.png", 1);
let interest_pes = new Interest(3, "PES", "assets/img/pes.png", 1);
interests.push(interest_football, interest_lol, interest_pes);
person.interests = interests;

let discription_javaServlet = "Biết sử dụng Java Servlet kết hợp JSP, JSTL cùng các công nghệ khác để viết trang Web Quản lý thí sinh đăng ký thi Hoa hậu Việt Nam.";
let skill_javaServlet = new Skill(1, "Java Servlet/JSP/JSTL", 40, discription_javaServlet, 1);

let discription_javaSpringBoot = "Biết sử dụng Spring Freamwork cùng các công nghệ khách như ajax, jQuery để viết trang web quản lý bán hàng";
let skill_javaSpringboot = new Skill(2, "Spring Freamwork", 40, discription_javaSpringBoot, 1);

let discription_db = "Biết sử dụng database để lưu trữ dữ liệu và đổ dữ liệu lên website. Có kiến thức cơ bản về các câu lệnh truy vấn.";
let skill_dataBase = new Skill(3, "Database", 45, discription_db, 1);

let discription_javaScript = "Biết dùng JavaScript, CSS, HTML kết hợp cùng Ajax, jQuery để tạo hiệu ứng, lấy dữ liệu, xử lý bất đồng bộ...";
let skill_js_css_html = new Skill(4, "HTML/CSS/JS", 50, discription_javaScript, 1);

skills.push(skill_javaServlet, skill_javaSpringboot, skill_dataBase, skill_js_css_html);
person.skills = skills;

let knowleage_1 = "Xây dựng được bố cục trang web, có phát triển thêm phần chạy ảnh trong tin mới. Có reponsive. Sử dụng Javascript để thiết lập chức năng tìm kiếm bài viết (Có chuẩn hóa chuỗi). Deploy dự án.";
let project_1 = new Project(1, "Mô phỏng trang chủ Liên Minh 360", "7 ngày", "1 người", "JavaScript ES6", "Không dùng", "HTML5/CSS3/Javascript ES6", "Không dùng", knowleage_1, "assets/img/portfolio/lienminh/image1.png", "assets/img/portfolio/lienminh/image2.png", "assets/img/portfolio/lienminh/image3.png", "assets/img/portfolio/lienminh/fullImage.png", "Không có", "http://bit.ly/39OGbFY", "Không có", "http://bit.ly/36g1XkM", 1);

let knowleage_2 = "Validate thông tin (front-end, back-end), phân tích thiết kế database, CRUD 4 bảng quan hệ với nhau, đăng nhập vào trang admin, xét duyệt hồ sơ, sử dụng thư viện summernote để thêm sửa bài viết, phân trang bằng backend. Deploy dự án lên Heroku";
let project_2 = new Project(2, "Trang web quản lý thông tin đăng ký thi Hoa hậu Việt Nam", "10 ngày", "1 người", "Java, Javascript ES6", "Servlet", "JSP/JSTL, HTML5/CSS3, Bootstrap 4, template AdminLTE", "PostgreSQL", knowleage_2, "assets/img/portfolio/hoahau/image1.png", "assets/img/portfolio/hoahau/image2.png", "assets/img/portfolio/hoahau/image3.png", "assets/img/portfolio/hoahau/fullImage.png", "admin; Password@123", "http://bit.ly/3t0H6vO", "http://bit.ly/3a4rsXv", "http://bit.ly/3cdCYCt", 1);

let knowleage_3 = "Xây dựng bố cục kỹ thuật dự án theo mô hình MVC, phân tích thiết kế database, thiết kế giao diện bán hàng, dùng Github để quản lý mã nguồn khi làm việc nhóm, CRUD 8/17 bảng với quan hệ với nhau, validate thông tin nhập vào (front-end, back-end), xử lý đồng bộ và bất đồng bộ trong ajax, upload file ảnh, đăng nhập phân quyền bằng Spring Security. Deploy dự án lên Heroku";
let project_3 = new Project(3, "Trang web hỗ trợ quản lý bán hàng", "25 ngày", "2 người", "Java, Javascript ES6", "Spring Boot, Spring Security, Ajax, jQuery, Thymeleaf, JPA, Restful API", "Bootstrap 4, CSS3, HTML5, template Admin: Gentelella-master, template Login: Login_v16", "PostgreSQL", knowleage_3, "assets/img/portfolio/shopnow/image1.png", "assets/img/portfolio/shopnow/image2.png", "assets/img/portfolio/shopnow/image3.png", "assets/img/portfolio/shopnow/fullImage.png", " admin@gmail.com; Password@123", "https://bit.ly/3ogD1jm", "http://bit.ly/36gnLNa", "http://bit.ly/2KR4Eln", 1);
projects.push(project_3, project_2, project_1);
person.projects = projects;

let education_1 = new Education(1, "07/2013-06/2017", "Đại học Khoa học Huế", "Cử nhân chuyên ngành Quản lý môi trường, khoa Môi trường", 1);
let education_2 = new Education(2, "03/2019-12/2019", " Học viện FPT Jetking Hồ Chí Minh", "Học viên ngành An ninh mạng", 1);
let education_3 = new Education(3, "07/2020-01/2021", "Codegym Bootcamp Huế", "Tốt nghiệp lớp Java C0620i1", 1);
educations.push(education_3, education_2, education_1);
person.educations = educations;

let experience3 = new Experience(3, "06/2020-01/2021", "Codegym Bootcamp Huế", "Học viên",
    "- Học cách sử dụng HTML, CSS, JavaScript để tạo website cơ bản.<br>- Tiếp cận ngôn ngữ Java, database mySQL/PostgreSQL để xây dựng ứng dụng backend với công nghệ JSP/Servlet, Spring Framework (Spring MVC, Spring Boot, Spring Security).<br>- Nâng cao kĩ năng tìm kiếm thông tin, làm việc nhóm, quản lí mã nguồn Github.<br>- Biết quản lí công việc bằng Product Backlog, Scrum.<br>", 1);
let experience2 = new Experience(2, "11/2018-04/2020", "Tiệm bánh mỳ PewPew", "Nhân viên phục vụ part-time", "- Học được cách làm việc có tâm.<br>- Trau dồi được kỹ năng làm việc nhóm.<br>- Luyện tập thái độ làm việc chuyên nghiệp (Luôn vui vẻ, đúng quy tắc)", 1);
let experience1 = new Experience(1, "08/2017-02/2018", "FPT Shop Huế", "Sale kiêm kỹ thuật viên", "- Làm quen với môi trường làm việc chuyên nghiệp. Chịu áp lực công việc cao<br>- Trau dồi kỹ năng giao tiếp", 1)
experiences.push(experience3, experience2, experience1);
person.experiences = experiences;

let certificate_1 = new Certificate(1, "Anh văn B1", "04/2016", "Có thể đọc hiểu được tài liệu tiếng Anh", 1);
let certificate_2 = new Certificate(2, "Hoàn thành mọi việc với Kanban", "07/2020", "Có thể lên kế hoạch và quản lý công việc với bảng Kanban, giới hạn công việc đang làm để tập trung hoàn thành từng việc một, đặt mục tiêu tốt cho ngắn hạn và dài hạn.", 1);
let certificate_3 = new Certificate(3, "SCRUM Essence", "12/2020", "Tạo được Định nghĩa Hoàn thành phù hợp với tình huống hiện tại, tạo và duy trì được Product Backlog, quản lý được Sprint Backlog, theo dõi được tiến độ của Sprint sử dụng biểu đồ burndown, theo dõi được tiến độ của sản phẩm sử dụng biểu đồ burndown.", 1);
certificates.push(certificate_3, certificate_2, certificate_1);
person.certificates = certificates;

let referencePerson_1 = new ReferencePerson(1, "Mr.Lê Tường Phúc", "assets/img/AnhPhuc.png", "Giám đốc điều hành trung tâm CodeGym Huế", "Công ty CODEGYM VIETNAM JSC", "0983.339.720", "phuc.le@codegym.vn", 1);
let referencePerson_2 = new ReferencePerson(2, "Mr.Nguyễn Hữu Anh Khoa", "assets/img/AnhKhoa.png", "Giám đốc đào tạo CodeGym Huế", "Công ty CODEGYM VIETNAM JSC", "0935216417", "khoa.nguyen@codegym.vn", 1);
referencePersons.push(referencePerson_2, referencePerson_1);
person.referencePersons = referencePersons;

