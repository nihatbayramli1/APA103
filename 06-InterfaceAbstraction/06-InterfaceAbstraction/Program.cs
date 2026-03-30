class Program
{
    static void Main(string[] args)
    {
        Calculation calc = new Calculation();

        Console.Write("Type first number: ");
        double a = Convert.ToDouble(Console.ReadLine());

        Console.Write("Type operation:  (+  -  *  /): ");
        string operation = Console.ReadLine();

        Console.Write("Type second number: ");
        double b = Convert.ToDouble(Console.ReadLine());

        double result = calc.Calculate(a, b, operation);

        Console.WriteLine("Result: " + result);
    }
}
