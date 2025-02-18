export default function searchJob(list, value) {
    let selection = []
    list.forEach(job => {
        if(
            job.title === value || 
            job.enterprise === value ||
            job.modality === value ||
            job.contractType === value ||
            job.areaActivity === value ||
            job.local === value
        ) {
            console.log("Achou aqui");
            selection.push(job);
        }
    })

    return selection;
}