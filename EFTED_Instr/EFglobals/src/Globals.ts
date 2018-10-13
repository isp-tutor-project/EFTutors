namespace EFTut_Suppl.$GLOBAL {

    // These GLOBAL mixins execute within the CTutorDoc scope
    // 
    export class $GLOBAL {


        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;


        public $preEnterScene(scene:any) : void {

            scene.setBreadCrumbs(scene.name);
        }        

        public $preExitScene(scene:any) : void {

            switch(scene.name) {

                case "SScene17":

                    if(this.testFeatures("FTR_TEDEXP1")) {

                        this.delFeature("FTR_TEDEXP1");
                        this.addFeature("FTR_TEDEXP2");
                    }
                    break;
            }
        }        

        public $nodeConstraint(nodeId:string, constraintId:string) : boolean {

            let result:boolean = false;

            switch(nodeId) {

                case "RQ_DEVSELECTOR": 
                    result = this.testFeatures(constraintId);           
                    break;

                case "TED_INTRO":
                    result = this.testFeatures(constraintId);           
                    break;

                case "TEDQ1":
                    switch(constraintId) {

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

                case "TEDQ2":
                    switch(constraintId) {
                        
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

                case "TEDQ5":
                    switch(constraintId) {
                        
                        case "FTR_TEDEXP1":

                            result = this.testFeatures(constraintId);                
                            break;

                        default:
                            break;
                    }
                    break;

                case "TEDPOST":
                    switch(constraintId) {
                        
                        case "POSTTEST":
                            let PTVarray = this.getModuleValue("TEDExptPOSTSequence"); 

                            result = PTVarray.length > 0;
                            break;

                        default:
                            break;
                    }
                    break;                    
                    
                default: 
                    break;
            }

            switch(constraintId) {
                default:
                    break;
            }

            return result;
        }
    }
}