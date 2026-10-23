export default function Contact() {
  return (
    <>
      <div className="min-h-screen">
        <div className="text-4xl lg:text-5xl font-serif flex justify-center pt-16">
          <span className="text-red-600">Con</span>tact US
        </div>
        <div className="grid md:grid-cols-2 mt-20 gap-10 mx-4 lg:mx-30 pb-10">
          <div className="flex flex-col items-center  border rounded-2xl pb-4 px-6 min-h-80">
            <div className="text-2xl font-serif py-2 pt-4 text-red-600">
              Prof. Navin Kumar
            </div>
            <div className="text-xl font-semibold">
              Convener, Bio-MANTHAN 25
            </div>
            <div className="flex flex-col items-center gap-2 pt-3">
                <div>Department of Mechanical Engineering (HOD) & </div>
            <div>Department of Biomedical Engineering</div>
            <div>IIT Ropar, Roopnagar - 140001 </div>
            <div>Email Id: biomanthan@iitrpr.ac.in </div>
            </div>
          </div>
          <div className="flex flex-col border rounded-2xl min-h-80">
            <div className="text-2xl flex justify-center font-serif py-2 pt-4 text-red-600">
              Support & Queries Team:
            </div>
            <div className="xl:pl-20 md:pl-10 pl-8 flex flex-col gap-2">
              <div className="font-bold">1. Mr. Saroj Kumar (Ph.D.)</div>
              <div>+91-9023617834 </div>
              <div>+91-9041197529</div>
              <div className="font-bold">2. Mr. Mohd. Waqar Khan (Ph.D.) </div>
              <div>+91-8299100514</div>
              <div className="font-bold">3. Mr. Abhishek (Ph.D.)</div>
              <div>+91-9729011947</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
