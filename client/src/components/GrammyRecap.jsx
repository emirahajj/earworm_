
import GrammyComponent from '../components/GrammyComponent'
import Tooltip from '@material-ui/core/Tooltip'


const GrammyRecap = ({awards, artist}) => {
    return (
        <div className="flex flex-row justify-center bg-opacity-90 rounded-2xl bg-dark-1 mt-10 mb-10 md:w-80 md:self-center px-6">
        {awards.length > 0 ?  
            (<div className="my-2">
                <h1 className="font-bold text-center text-3xl">Awards</h1>
                <div className="flex flex-row my-4 justify-center">
                {awards.map(element => {
                            return <Tooltip title={<p style={{ fontSize: "14px", width: "200px", textAlign: "center", lineHeight: "18px" }}>This album won <br /><b>{element.award}</b> <br /> at the {element.year} Grammy's</p>} placement="bottom">
                                <div><GrammyComponent /></div>
                            </Tooltip>
                        })}
                </div>
                <p className="mb-4 text-center font-thin">This album garnered {awards.length} Grammy's for {artist}</p>
            </div>) : <p></p>
            }
        </div>
    )
}

export default GrammyRecap
