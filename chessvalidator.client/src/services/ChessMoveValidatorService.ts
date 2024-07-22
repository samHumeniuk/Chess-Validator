import { ChessMoveProposal } from "../types/chessMoveProposal";


class ChessMoveValidatorService {


    async TryMove(chessMoveProposal: ChessMoveProposal) {

        const url = 'https://localhost:7256/chessMoveValidator';
        const response = await fetch(url,
            {
                method: 'POST',
                //headers: {
                //    'Content-Type': 'application/json'
                //},
                body: JSON.stringify(chessMoveProposal)
            })

        const data = await response.json();
        console.log(data);


    }

}


export default ChessMoveValidatorService;