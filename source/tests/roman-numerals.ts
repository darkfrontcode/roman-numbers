import RomanNumerals from '../ts/roman-numerals'
import { expect } from 'chai'
import 'mocha'

describe('Roman Numerals', () => {

	describe('To Roman', () => {
		
		let result:string

		it('it should convert a number 8 to a Roman numeral "VIII" even if it is a negative number', () => {

			result = RomanNumerals.toRoman(-8)
			expect(result).to.equal('VIII')

		})

		it('should convert a number 8 to a roman numeral "VIII"', () => {

			result = RomanNumerals.toRoman(8)
			expect(result).to.equal('VIII')

		})

		it('should convert a number 8 to a roman numeral "VIII"', () => {

			result = RomanNumerals.toRoman(8)
			expect(result).to.equal('VIII')

		})

		it('should convert a number 5 to a roman numeral "V"', () => {

			result = RomanNumerals.toRoman(5)
			expect(result).to.equal('V')

		})

		it('should convert a number 3 to a roman numeral "III"', () => {

			result = RomanNumerals.toRoman(3)
			expect(result).to.equal('III')

		})

		it('should convert a number 4 to a roman numeral "IV"', () => {

			result = RomanNumerals.toRoman(4)
			expect(result).to.equal('IV')

		})

		it('should convert a number 9 to a roman numeral "IX"', () => {

			result = RomanNumerals.toRoman(9)
			expect(result).to.equal('IX')

		})

		it('should convert a number 123 to a roman numeral "CXXIII"', () => {

			result = RomanNumerals.toRoman(123)
			expect(result).to.equal('CXXIII')

		})	

		it('should convert a number 3290 to a roman numeral "MMMCCXC"', () => {

			result = RomanNumerals.toRoman(3290)
			expect(result).to.equal('MMMCCXC')

		})

		it('should convert a number 777 to a roman numeral "DCCLXXVII"', () => {

			result = RomanNumerals.toRoman(777)
			expect(result).to.equal('DCCLXXVII')

		})

		it('should convert a number 949 to a roman numeral "CMXLIX"', () => {

			result = RomanNumerals.toRoman(949)
			expect(result).to.equal('CMXLIX')

		})

		it('should convert a number 2000 to a roman numeral "MM"', () => {

			result = RomanNumerals.toRoman(2000)
			expect(result).to.equal('MM')

		})

	})
	
	describe('From Roman', () => {

		let result:number

		it('should convert a roman number "LXXXVII" to a 87 number', () => {

			result = RomanNumerals.fromRoman("test")
			expect(result).to.equal(0)

		})

		it('should convert a roman number "LXXXVII" to a 87 number', () => {

			result = RomanNumerals.fromRoman("LXXXVII")
			expect(result).to.equal(87)

		})

		it('should convert a roman number "XLIII" to a 43 number', () => {

			result = RomanNumerals.fromRoman("XLIII")
			expect(result).to.equal(43)

		})

		it('should convert a roman number "XXII" to a 22 number', () => {

			result = RomanNumerals.fromRoman("XXII")
			expect(result).to.equal(22)

		})

		it('should convert a roman number "DCCVII" to a 707 number', () => {

			result = RomanNumerals.fromRoman("DCCVII")
			expect(result).to.equal(707)

		})

		it('should convert a roman number "LXIX" to a 69 number', () => {

			result = RomanNumerals.fromRoman("LXIX")
			expect(result).to.equal(69)

		})

	})

})
