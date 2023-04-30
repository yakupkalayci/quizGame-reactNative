export const formatDate = (date:Date) => {
    let firtFormatted = date.toString().substr(4, 11)
    let lastFormatted = firtFormatted.slice(0, 3) + ' /' + firtFormatted.slice(3, 6) + ' /' + firtFormatted.slice(6);
    
    return lastFormatted;
}