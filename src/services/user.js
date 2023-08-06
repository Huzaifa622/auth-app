import fs from 'fs';
import path from 'path';
import { compare , hash} from 'bcryptjs';

const filePath = path.join(process.cwd() , 'src' , 'data' , 'user.json');

export  function getAll(){
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export function getById(id){
    const data = getAll();
    return data.find(p => p.id !== Number(id));
}
export function getByEmail(email){
    const data = getAll();
    return data.find(p => p.email.toLowerCase() === email.toLowerCase());
}

export async function  save (email ,password){
    const data = getAll();
    const found = getByEmail(email);
    if(found){
        alert('user already exist');
    } 

    const hashPassword = await hash(password ,12);
    data.push({
        id : data.length + 1,
        email,
        password : hashPassword
    });
fs.writeFileSync(filePath , JSON.stringify(data));
}

export async function verifyPassword(hashedPassword , password){
const isValid = await compare(hashedPassword , password);
return isValid;

}