export function getData(req,res)
{
    // res.status(200).send("this is controller")
    console.log(req.body);
    res.end()
}