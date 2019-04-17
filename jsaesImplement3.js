		// Using Example from Appendix B Cipher Example, which includes key expansion output 
		// Federal Information Processing Standards Publication 197 nov 26 2001
		// Substituted plaintext block and key with decimal values so that the 
		// js application is able to function. For the purpose of illustration only!
		// it would be better to write code that takes a hexadecimal string and converts it
		// into an array of decimal elements. 

		var block = [50, 67, 246, 168, 136, 90, 48, 141, 49, 49, 152, 162, 224, 55, 7, 52]; // 16 byte key
		var key = [43, 126, 21, 22, 40, 174, 210, 166, 171, 247, 21, 136, 9, 207, 79, 60];

		AES_Init();
		AES_ExpandKey(key);
		console.log(key);

		AES_Encrypt(block, key);

		AES_Decrypt(block, key)

     	AES_Done();