public class Calculation : ICalculation
{
    public double Calculate(double a, double b, string operation)
    {
        if (operation == "+")
            return a + b;

        else if (operation == "-")
            return a - b;

        else if (operation == "*")
            return a * b;

        else if (operation == "/")
        {
            if (b == 0)
            {
                Console.WriteLine("0-a bolme olmur!");
                return 0;
            }
            return a / b;
        }

        else
        {
            Console.WriteLine("Yanlis eded yazdiniz");
            return 0;
        }
    }
}
