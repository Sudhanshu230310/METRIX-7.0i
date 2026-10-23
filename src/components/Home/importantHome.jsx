export default function ImportantUp(){
    return <div className="lg:mx-16 mx-4 grid gap-8 lg:gap-20 lg:grid-cols-2 ">
        <div className="border py-8 bg-gray-200 rounded-2xl border-gray-400 px-10 flex flex-col">
            <div className="text-3xl font-serif lg:text-4xl"> <span className="text-red-500">Imp</span>ortant Updates</div>
            <div className="flex flex-col gap-2 pt-4">
                <div> ~ ABSTRACT SUBMISSION <span className="text-blue-700 text-lg underline"><a href="/abstract">Open</a></span> </div>
                <div> ~ CONFERENCE REGISTRATION <span className="text-blue-700 text-lg underline"><a href="https://sites.google.com/iitrpr.ac.in/biomanthan/registration?authuser=0">Open</a></span></div>
                <div> ~ WORKSHOP REGISTRATION <span className="text-blue-700 text-lg underline"><a href="https://sites.google.com/iitrpr.ac.in/biomanthan/registration?authuser=0">Open</a></span></div>
                <div> ~ HANDS-ON TRAINING REGISTRATION <span className="text-blue-700 text-lg underline"><a href="https://sites.google.com/iitrpr.ac.in/biomanthan/registration?authuser=0">Open</a></span></div>
            </div>
        </div>
        <div className="border py-8 bg-gray-200 rounded-2xl border-gray-400 px-10 flex flex-col">
            <div className="text-3xl font-serif lg:text-4xl"> <span className="text-red-500">Imp</span>ortant Deadlines</div>
            <div className="flex flex-col gap-2 pt-4">
                <div> ~ Abstract Submission last date : 05th Nov' 25</div>
                <div> ~ Last Date for Accommodation Request : 05th Nov' 25</div>
            </div>
        </div>
    </div>
}