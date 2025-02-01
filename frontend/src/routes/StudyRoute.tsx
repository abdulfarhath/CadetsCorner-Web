import { useState } from "react"



export default function StudyRoute() {
    const [selectedCertificate, SetSelectedCertificate] = useState("A Certificate");
    const [selectedTopic , SetSelectedTopic] = useState<string | undefined>(undefined);
    const [selectedSubTopic, SetSelectedSubTopic] = useState<string | undefined>(undefined);

    const certificates = {
        "A Certificate" : {
            "topic1":["subtopic1, subtopic2, subtopic3"],
            "topic2":["subtopic1, subtopic2, subtopic3"],
        },
        "B Certificate" : {
            "topic1B":["subtopic1B, subtopic2, subtopic3"],
            "topic2B":["subtopic1B, subtopic2, subtopic3"],
        },
        "C Certificate" : {
            "topic1C":["subtopic1C, subtopic2, subtopic3"],
            "topic2C":["subtopic1C, subtopic2, subtopic3"],
        }
    }

    const handleCertificate = (certificate: string) => {
        SetSelectedCertificate(certificate);
    }
    const handleTopic = (topic : string) =>{
        SetSelectedTopic(topic);
    }
    const handleSubTopic = (subtopic : string)=>{
        SetSelectedSubTopic(subtopic);
    }

    return (
        <>
            <nav className="bg-gradient-to-r from-blue-800 to-blue-950 shadow-lg py-2">
                <ul className="flex flex-row justify-center gap-8 text-white text-sm font-medium">
                    {
                        Object.keys(certificates).map((certificate)=>{
                           return <li 
                                key={certificate}
                                className=" hover:text-red-600 "
                                onClick={()=>handleCertificate(certificate)}
                           >{certificate}</li>
                        })
                    }
                </ul>
            </nav>  
            <div className="container flex flex-row gap-14 mt-9">
                {/* left */}
                <div className="left-panel w-36">
                    <h1>{selectedCertificate}</h1>
                    <h2>{
                        Object.keys(certificates[selectedCertificate] as Record<string, string[]>).map((topic)=>(
                            <h2 key={topic}
                                onClick={()=>handleTopic(topic)}
                                >{topic}</h2>
                        ))
                        }</h2>
                    <h3>
                        {
                            Object.keys(certificates[selectedCertificate][selectedTopic]).map((subtopic)=>{
                                return (
                                    <h2
                                        onClick = {()=>{handleSubTopic(subtopic)}}
                                    >{subtopic}</h2>
                                )
                            })
                        }
                    </h3>
                </div>

                {/* right */}
                <div className="right-panel flex-1">
                    //content
                </div>
            </div>
        </>
    )
}
