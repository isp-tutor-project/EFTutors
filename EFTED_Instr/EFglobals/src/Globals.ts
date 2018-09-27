namespace EFTut_Suppl.$GLOBAL {

    // These mixins execute within the CTutorDoc scope
    // 
    export class $GLOBAL {


        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;
       

        public $nodeConstraint(constrainId:string) : boolean {

            let result:boolean = false;

            switch(constrainId) {
                default:
                    result = this.testFeatures(constrainId);           
                    break;
            }

            return result;
        }
    }
}