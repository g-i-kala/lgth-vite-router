import { coaching_details } from "../constants";

const CoachingDetails = ({ id }) => {

  const coachingDetails = coaching_details.find(item=>item.id===id);
  
  return (
    <div>
      <div className="text-center my-auto text-sm p-4">
        <h1 className="border-solid border-2 border-color04 p-2 font-poppins_semibold tracking-wider text-lg mb-1 sm:mb-2">{coachingDetails.title}</h1>
          <ul className="mt-4 sm:mt-8">
              {coachingDetails.list.map(function(name, index){
                return <li key={ index } className="list-disc text-sm text-left ml-12">{name}</li>;
              })}
          </ul>
      </div>
    </div>
    

  )
}

export default CoachingDetails