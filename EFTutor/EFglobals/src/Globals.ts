namespace EFTut_Suppl.$GLOBAL {

    // NOTE: This executes in the TutorDoc scope
    // 
    export class $GLOBAL {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;
       
        // Global Tutor Graph Constraints
        // 
        public $nodeConstraint(constrainId:string) : boolean {

            let result:boolean = false;

            let RQconf = this.getModuleValue("RQconfirmation");       

            switch(constrainId) {

                case "CHANGE_RQ":
                    if(RQconf === constrainId)
                                        result = true;
                    break;
                case "CHANGE_TOPIC":
                    if(RQconf === constrainId)
                                        result = true;
                    break;
                case "CHANGE_AREA":
                    if(RQconf === constrainId)
                                        result = true;
                    break;
            }

            return result;
        }

   }
}