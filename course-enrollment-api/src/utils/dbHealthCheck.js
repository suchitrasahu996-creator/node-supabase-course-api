import  supabase from './configs/supabase.Client'

async function checkDatabaseConnection(){
    try{
        const {error}= await supabase.from("courses").select().limit();
        if (error) {
            throw error;
        }
        console.log("Database connected sucessfully");
        return false;
    }catch(error){
    console.log("Database connection failed ", error);
    return false;
    }
}
export default checkDatabaseConnection