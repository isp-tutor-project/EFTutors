namespace EFTut_Suppl.$GLOBAL {

    // These mixins execute within the CTutorDoc scope
    // 
    export class $GLOBAL {


        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;
       

        public $nodeConstraint(nodeId:string, constrainId:string) : boolean {

            let result:boolean = false;

            switch(nodeId) {
                case "TED_INTRO":
                    result = this.testFeatures(constrainId);           
                    break;

                case "TEDQ1":
                    switch(constrainId) {

                        case "CORRECT":
                            result = this.getModuleValue("Expt1_Q1").value;                                        
                            break;

                        case "INCORRECT":
                            result = !this.getModuleValue("Expt1_Q1").value;                                        
                            break;

                        default:
                            break;
                    }
                    break;

                case "TEDQ4":
                    switch(constrainId) {
                        
                        case "CORRECT":
                            result = this.getModuleValue("Expt1_Q4").value;                                        
                            break;

                        case "INCORRECT":
                            result = !this.getModuleValue("Expt1_Q4").value;                                        
                            break;

                        default:
                            break;
                    }
                    break;

                default: 
                    break;
            }

            switch(constrainId) {
                default:
                    break;
            }

            return result;
        }
    }
}