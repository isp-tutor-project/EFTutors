namespace EFTut_Suppl.$GLOBAL {

    // These GLOBAL mixins execute within the CTutorDoc scope
    // 
    export class $GLOBAL {


        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;


        public $preEnterScene(scene:any) : void {

            switch (scene.name) {
                case "SScene1":
                case "SScene2":
                    scene.setProgress(1,1);
                    break;

                case "SScene3":
                case "SScene4":
                case "SScene5":
                case "SScene6":
                    scene.setProgress(1,2);
                    break;

                case "SScene7":
                case "SScene8":
                case "SScene9":
                case "SScene10":
                case "SScene11":
                case "SScene12":
                case "SScene12A":
                case "SScene13":
                case "SScene14":
                case "SScene15":
                case "SScene16":
                case "SScene17":
                case "SScene18":
            
                    if(this.testFeatures("FTR_TEDEXP1")) scene.setProgress(2,1);
                                                    else scene.setProgress(3,1);
                    break;
                    
                case "SScene19":
                case "SScene20":

                    let PTVarray = this.getModuleValue("TEDExptPOSTSequence"); 

                    scene.setProgress(7 - PTVarray.length, 1);
                    break;

                case "SScene21":
                    scene.setProgress(7,2);
                    break;

                default:
                    scene.hideProgress();
                    break;
            }

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