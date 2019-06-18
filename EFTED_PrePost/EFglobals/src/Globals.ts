namespace EFTut_Suppl.$GLOBAL {

    export class $GLOBAL {


        $var1:string = "valname2";

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like --> this[<element name>]
        // 
        [key: string]: any;

        public $preEnterScene(scene:any) : void {

            scene.setBreadCrumbs(scene.name);
        }        


        // Global Tutor Graph Constraints
        // 
        public $nodeConstraint(nodeId:string, constraintId:string) : boolean {

            let result:boolean = false;

            switch(constraintId) {

                case "Q2BAD_SELECTED":
                    if(this.getModuleValue('q2Bad') === "checked")
                                                        result = true;
                    break;

                case "Q4BAD_SELECTED":
                    if(this.getModuleValue('q4Bad') === "checked")
                                                        result = true;
                    break;

                case "Q6BAD_SELECTED":
                    if(this.getModuleValue('q6Bad') === "checked")
                                                        result = true;
                    break;
            }

            return result;
        }

   }
}