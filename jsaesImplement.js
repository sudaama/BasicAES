		// Using Example from personal notes...
		//  
		var block = 'Two One Nine Two'.split('').map( (elem) => elem.charCodeAt(0) ); // 16 byte key
		var key = 'Thats my Kung Fu'.split('').map( (elem) => elem.charCodeAt(0) );

		AES_Init();
		AES_ExpandKey(key);
		console.log(key);

		AES_Encrypt(block, key);

		AES_Decrypt(block, key)

     	AES_Done();