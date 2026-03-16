class Program
{
    static void Main()
    {
        Student s1 = new Student("Hasan", "Sabbah", 20, "hasan@mail.com", "P1", "S100", "IT", 88.5, 2);
        Student s2 = new Student("Ebduleziz", "Behmenyar", 21, "bekir@mail.com", "P2", "S101", "IT", 92.0, 3);
        Student s3 = new Student("Nihat", "Bayramli", 19, "nihat@mail.com", "P3", "S102", "IT", 100, 1);

        Teacher t1 = new Teacher("Sebnem", "Tovuzlu", 40, "sebnem@mail.com", "T1", "IT", "Programming", 800, 15);
        Teacher t2 = new Teacher("Rashad", "Haciyev", 35, "rashad@mail.com", "T2", "IT", "Algorithms", 800, 8);

        Administrator admin = new Administrator("Kamran", "Quliyev", 45, "kamran@mail.com", "A1", "Dekan", "IT", 5);

        Console.WriteLine("---- STUDENTS ----");

        s1.ShowStudentInfo();
        Console.WriteLine("Teqaud: " + s1.CalculateScholarship());
        Console.WriteLine();

        s2.ShowStudentInfo();
        Console.WriteLine("Teqaud: " + s2.CalculateScholarship());
        Console.WriteLine();

        s3.ShowStudentInfo();
        Console.WriteLine("Teqaud: " + s3.CalculateScholarship());
        Console.WriteLine();

        Console.WriteLine("---- TEACHERS ----");

        t1.ShowTeacherInfo();
        Console.WriteLine("Maas: " + t1.CalculateSalary());
        Console.WriteLine();

        t2.ShowTeacherInfo();
        Console.WriteLine("Maas: " + t2.CalculateSalary());
        Console.WriteLine();

        Console.WriteLine("---- ADMIN ----");
        admin.ShowAdminInfo();

        Console.WriteLine();
        admin.GrantAccess(s1);

        int totalScholarship =
            s1.CalculateScholarship() +
            s2.CalculateScholarship() +
            s3.CalculateScholarship();

        decimal totalSalary =
            t1.CalculateSalary() +
            t2.CalculateSalary();

        Console.WriteLine();
        Console.WriteLine("Umumi teqaud xerci: " + totalScholarship);
        Console.WriteLine("Umumi maas xerci: " + totalSalary);
    }
}
