namespace EFTut_Suppl.$GLOBAL {

    // NOTE: This executes in the TutorDoc scope
    // 
    export class $GLOBAL {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        
        public $preEnterScene(scene:any) : void {

            scene.setBreadCrumbs(scene.name);

            switch(scene.name) {
                case "test":
                    break;

                default:
                    scene.hideProgress();
                    break;
            }
        }        

        // Global Tutor Graph Constraints
        // 
        public $nodeConstraint(nodeId:string, constraintId:string) : boolean {

            let result:boolean = false;

            let RQconf = this.getModuleValue("RQconfirmation");       

            switch(constraintId) {

                case "CHANGE_RQ":
                    if(RQconf === constraintId)
                                        result = true;
                    break;
                case "CHANGE_TOPIC":
                    if(RQconf === constraintId)
                                        result = true;
                    break;
                case "CHANGE_AREA":
                    if(RQconf === constraintId)
                                        result = true;
                    break;
            }

            return result;
        }

   }
}