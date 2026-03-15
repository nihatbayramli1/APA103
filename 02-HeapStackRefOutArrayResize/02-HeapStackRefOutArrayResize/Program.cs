class Program
{
    static int[] arrresize(int[] numbers, params int[] nums)
    {
        int[] newArray = new int[numbers.Length + nums.Length];

        for (int i = 0; i < numbers.Length; i++)
        {
            newArray[i] = numbers[i];
        }
        for (int i = 0; i < nums.Length; i++)
        {
            newArray[numbers.Length + i] = nums[i];
        }

        return newArray;

    }

    static void Main()
    {
        int[] numbers = { 10, 20, 30, 40, 50, };
        numbers = arrresize(numbers, 4, 5, 6);
        foreach (int n in numbers)
        {
            Console.WriteLine(n);

        }



    }




}

