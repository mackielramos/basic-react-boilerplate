import axios from 'axios'

export function cpath(){
	if(process.env.NODE_ENV == 'production'){
		// return 'https://ayalagrades.herokuapp.com/api/';
	}else{
		return 'http://localhost:3000/';
	}
}