import { Product } from "../../../hooks/useGetCertificates"

export function Certificate(cert:Product) {
    return (
        <div className="h-64 w-60 border border-solid border-primaryGray p-10 ">
            <img  src={cert.images[0]} /> 
        </div>
    )
}