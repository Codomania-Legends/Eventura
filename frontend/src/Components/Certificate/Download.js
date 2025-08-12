import html2canvas from "html2canvas"

function DownloadMyCertificate( element ){
    html2canvas( document.getElementById(element) )
    .then( (canvas) => {
        const create = document.createElement("a")
        create.download = "Certificate.png"
        create.href = canvas.toDataURL("image/png")
        create.click()
    } )
}

export default DownloadMyCertificate;
