// METHOD 1
// const asyncHandler = (fn) => {
//     async (res,req,next) => {
//         try {
//             await fn(res,req,next)
//         } catch (error) {
//             res.status(error.code || 400).json({
//                 success: false,
//                 message: error.message
//             })
//         }
//     }
// }


// METHOD 2
const asyncHandler = (fn) => {
    (res,req,next) => {
        Promise.resolve(fn(res,req,next))
        .catch((error)=>{
            res.status(error.code || 400).json({
                success: false,
                message: error.message
            })
        })
    }
}


export {asyncHandler}