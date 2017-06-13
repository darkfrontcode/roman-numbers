export default class RomanNumerals
{

	private static decimals = new Array<number>(1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1)
	private static roman = new Array<string>("M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I")

	public static toRoman(n:number) : string
	{
		let r:string = ''
		n = Math.abs(n)

		for (var i = 0;i<=this.decimals.length;i++)
		{
			const current = this.decimals[i]

			while (n%current < n)
			{     
				r += this.roman[i]
				n -= current
			}
		}

		return r
	}

	public static fromRoman(s:string) : number
	{
		let r:number = 0

		for (let i = 0;i<=this.decimals.length;i++)
		{
			const current = this.roman[i]

			while (s.indexOf(current) === 0)
			{
				r += this.decimals[i];
				s = s.replace(current, '')
			}
		}

		return r
	}

}
