module.exports = {
    
        

        'GET /permisson': async (ctx, next) => {
            
          const permissions = {
            "DASHBOARD": {  //统计面板权限
                "PERMISSIONS": [
                    "READ_INVENTORY_DASHBOARD",  //商品统计查看
                    "READ_CONNECTION_DASHBOARD" //供应商统计查看
                ]
            }, 
            "USER": {    //员工权限管理
                "PERMISSIONS": [
                    "MANAGE_DEPARTMENT",   //部门管理
                    "MANAGE_USER"   //员工管理
                ]
            }
        }
    
        //2.权限名称映射
        const permissionMap = {
            "READ_INVENTORY_DASHBOARD": "商品统计查看",
            "READ_CONNECTION_DASHBOARD": "供应商统计查看",
            "MANAGE_DEPARTMENT": "部门管理",
            "MANAGE_USER": "员工管理"
        }
    
        //3.权限类别映射
        const permissionTypeMap = {
            "DASHBOARD": "统计面板权限",
            "USER": "员工权限管理"
        }
    
        const result = {
            "DASHBOARD": {
                "name":"统计面板权限",
                "permissions":[
                    {
                        "type":"READ_INVENTORY_DASHBOARD",
                        "name":"商品统计查看"
                    },
                    {
                        "type":"READ_CONNECTION_DASHBOARD",
                        "name":"供应商统计查看"
                    },
                ]
            },
            "USER": {
                "name":  "员工权限管理",
                "permissions":[
                    {
                        "type": "MANAGE_DEPARTMENT",
                        "name": "部门管理"
                    },
                    {
                        "type": "MANAGE_USER",
                        "name": "员工管理"
                    },
                ]
            }
        }
    
    
        function mapPermissionName(permissions){
            var rst = 
                {
                    "DASHBOARD": {
                        "name":permissionTypeMap.DASHBOARD,
                        "permissions":[
                            {
                                "type":permissions.DASHBOARD[0],
                                "name":permissionMap.READ_INVENTORY_DASHBOARD
                            },
                            {
                                "type":permissions.DASHBOARD[1],
                                "name":permissionMap.READ_CONNECTION_DASHBOARD
                            },
                        ]
                    },
                    "USER": {
                        "name":  permissionTypeMap.USER,
                        "permissions":[
                            {
                                "type": permissions.USER.PERMISSIONS[0],
                                "name": permissionMap.MANAGE_DEPARTMENT
                            },
                            {
                                "type": permissions.USER.PERMISSIONS[1],
                                "name": permissionMap.MANAGE_USER
                            },
                        ]
                    }
                }   
                return rst;       
        }
    
        mapPermissionName(permissions);
            // ctx.render('permission.html', data);
            ctx.response.body = JSON.stringify(mapPermissionName(permissions));
        }
    
    };