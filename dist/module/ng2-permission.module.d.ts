import { PermissionService } from '../services/permission.service';
import { PermissionGuard } from '../services/permission.guard';
import { PermissionHelper } from '../services/permission-helper.service';
export declare class Ng2Permission {
    static forRoot(): {
        ngModule: typeof Ng2Permission;
        providers: (typeof PermissionService | typeof PermissionHelper | typeof PermissionGuard)[];
    };
}
