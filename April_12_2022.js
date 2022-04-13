const match = function(candidate,job){
    if(!candidate.minSalary || !job.maxSalary){
        throw 'Missing candidate minSalary or job maxSalary';
    }
    return (candidate.minSalary *.9 <= job.maxSalary);
}