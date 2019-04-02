var keycode = [
    { code: 0, en: '', zh: '', bind: null },
    { code: 1, en: '', zh: '', bind: null },
    { code: 2, en: '', zh: '', bind: null },
    { code: 3, en: '', zh: '', bind: null },
    { code: 4, en: '', zh: '', bind: null },
    { code: 5, en: '', zh: '', bind: null },
    { code: 6, en: '', zh: '', bind: null },
    { code: 7, en: '', zh: '', bind: null },
    { code: 8, en: 'BackSpace', zh: '退格(BackSpace)', bind: null },
    { code: 9, en: 'Tab', zh: '制表键(Tab)', bind: null },
    { code: 10, en: '', zh: '', bind: null },
    { code: 11, en: '', zh: '', bind: null },
    { code: 12, en: 'Clear', zh: '', bind: null },
    { code: 13, en: 'Enter', zh: '回车(Enter)', bind: null },
    { code: 14, en: '', zh: '', bind: null },
    { code: 15, en: '', zh: '', bind: null },
    { code: 16, en: 'Shift_Left', zh: '左shift', bind: null },
    { code: 17, en: 'Control_Left', zh: '左ctrl', bind: null },
    { code: 18, en: 'Alt_Left', zh: '左Alt', bind: null },
    { code: 19, en: 'Pause', zh: '暂停键', bind: null },
    { code: 20, en: 'Caps_lock', zh: '大写锁定(CapsLock)', bind: null },
    { code: 21, en: '', zh: '', bind: null },
    { code: 22, en: '', zh: '', bind: null },
    { code: 23, en: '', zh: '', bind: null },
    { code: 24, en: '', zh: '', bind: null },
    { code: 25, en: '', zh: '', bind: null },
    { code: 26, en: '', zh: '', bind: null },
    { code: 27, en: 'Esc Escape', zh: 'ESC', bind: null },
    { code: 28, en: '', zh: '', bind: null },
    { code: 29, en: '', zh: '', bind: null },
    { code: 30, en: '', zh: '', bind: null },
    { code: 31, en: '', zh: '', bind: null },
    { code: 32, en: 'Space', zh: '空格', bind: null },
    { code: 33, en: 'Page Up', zh: '功能键-Page Up', bind: null },
    { code: 34, en: 'Page Down', zh: '功能键-Page Down', bind: null },
    { code: 35, en: 'End', zh: '功能键-End', bind: null },
    { code: 36, en: 'Home', zh: '功能键-Home', bind: null },
    { code: 37, en: 'Left Arrow', zh: '方向-左键', bind: null },
    { code: 38, en: 'Up Arrow', zh: '方向-上键', bind: null },
    { code: 39, en: 'Right Arrow', zh: '方向-右键', bind: null },
    { code: 40, en: 'Down Arrow', zh: '方向-下键', bind: null },
    { code: 41, en: 'Select', zh: '', bind: null },
    { code: 42, en: 'Print', zh: '', bind: null },
    { code: 43, en: 'Execute', zh: '', bind: null },
    { code: 44, en: '', zh: '', bind: null },
    { code: 45, en: 'Insert', zh: '功能键-Insert', bind: null },
    { code: 46, en: 'Delete', zh: '功能键-删除键(Delete)', bind: null },
    { code: 47, en: 'Help', zh: '', bind: null },
    { code: 48, en: '0 )', zh: '0', bind: null },
    { code: 49, en: '1 !', zh: '1', bind: null },
    { code: 50, en: '2 @', zh: '2', bind: null },
    { code: 51, en: '3 #', zh: '3', bind: null },
    { code: 52, en: '4 $', zh: '4', bind: null },
    { code: 53, en: '5 %', zh: '5', bind: null },
    { code: 54, en: '6 ^', zh: '6', bind: null },
    { code: 55, en: '7 &', zh: '7', bind: null },
    { code: 56, en: '8 *', zh: '8', bind: null },
    { code: 57, en: '9 (', zh: '9', bind: null },
    { code: 58, en: '', zh: '', bind: null },
    { code: 59, en: '', zh: '', bind: null },
    { code: 60, en: '', zh: '', bind: null },
    { code: 61, en: '', zh: '', bind: null },
    { code: 62, en: '', zh: '', bind: null },
    { code: 63, en: '', zh: '', bind: null },
    { code: 64, en: '', zh: '', bind: null },
    { code: 65, en: 'a A', zh: 'A', bind: turnLeft },
    { code: 66, en: 'b B', zh: 'B', bind: null },
    { code: 67, en: 'c C', zh: 'C', bind: null },
    { code: 68, en: 'd D', zh: 'D', bind: turnRight },
    { code: 69, en: 'e E', zh: 'E', bind: null },
    { code: 70, en: 'f F', zh: 'F', bind: moveDown },
    { code: 71, en: 'g G', zh: 'G', bind: null },
    { code: 72, en: 'h H', zh: 'H', bind: null },
    { code: 73, en: 'i I', zh: 'I', bind: null },
    { code: 74, en: 'j J', zh: 'J', bind: null },
    { code: 75, en: 'k K', zh: 'K', bind: null },
    { code: 76, en: 'l L', zh: 'L', bind: null },
    { code: 77, en: 'm M', zh: 'M', bind: null },
    { code: 78, en: 'n N', zh: 'N', bind: null },
    { code: 79, en: 'o O', zh: 'O', bind: null },
    { code: 80, en: 'p P', zh: 'P', bind: null },
    { code: 81, en: 'q Q', zh: 'Q', bind: null },
    { code: 82, en: 'r R', zh: 'R', bind: moveUp },
    { code: 83, en: 's S', zh: 'S', bind: backward },
    { code: 84, en: 't T', zh: 'T', bind: null },
    { code: 85, en: 'u U', zh: 'U', bind: null },
    { code: 86, en: 'v V', zh: 'V', bind: null },
    { code: 87, en: 'w W', zh: 'W', bind: forward },
    { code: 88, en: 'x X', zh: 'X', bind: null },
    { code: 89, en: 'y Y', zh: 'Y', bind: null },
    { code: 90, en: 'z Z', zh: 'Z', bind: null },
    { code: 91, en: '', zh: '', bind: null },
    { code: 92, en: '', zh: '', bind: null },
    { code: 93, en: '', zh: '', bind: null },
    { code: 94, en: '', zh: '', bind: null },
    { code: 95, en: '', zh: '', bind: null },
    { code: 96, en: 'KP_0', zh: '小键盘-0', bind: null },
    { code: 97, en: 'KP_1', zh: '小键盘-1', bind: null },
    { code: 98, en: 'KP_2', zh: '小键盘-2', bind: lookDown },
    { code: 99, en: 'KP_3', zh: '小键盘-3', bind: null },
    { code: 100, en: 'KP_4', zh: '小键盘-4', bind: lookLeft },
    { code: 101, en: 'KP_5', zh: '小键盘-5', bind: null },
    { code: 102, en: 'KP_6', zh: '小键盘-6', bind: lookRight },
    { code: 103, en: 'KP_7', zh: '小键盘-7', bind: null },
    { code: 104, en: 'KP_8', zh: '小键盘-8', bind: lookUp },
    { code: 105, en: 'KP_9', zh: '小键盘-9', bind: null },
    { code: 106, en: 'KP_* KP_Multiply', zh: '小键盘-乘号', bind: null },
    { code: 107, en: 'KP_+ KP_Add', zh: '小键盘-加号', bind: null },
    { code: 108, en: 'KP_Enter KP_Separator', zh: '小键盘-回车(Enter)', bind: null },
    { code: 109, en: 'KP_- KP_Subtract', zh: '小键盘-减号', bind: null },
    { code: 110, en: 'KP_. KP_Decimal', zh: '小键盘-点', bind: null },
    { code: 111, en: 'KP_/ KP_Divide', zh: '小键盘-除号', bind: null },
    { code: 112, en: 'F1', zh: 'F1', bind: null },
    { code: 113, en: 'F2', zh: 'F2', bind: null },
    { code: 114, en: 'F3', zh: 'F3', bind: null },
    { code: 115, en: 'F4', zh: 'F4', bind: null },
    { code: 116, en: 'F5', zh: 'F5', bind: null },
    { code: 117, en: 'F6', zh: 'F6', bind: null },
    { code: 118, en: 'F7', zh: 'F7', bind: null },
    { code: 119, en: 'F8', zh: 'F8', bind: null },
    { code: 120, en: 'F9', zh: 'F9', bind: null },
    { code: 121, en: 'F10', zh: 'F10', bind: null },
    { code: 122, en: 'F11', zh: 'F11', bind: null },
    { code: 123, en: 'F12', zh: 'F12', bind: null },
    { code: 124, en: 'F13', zh: '', bind: null },
    { code: 125, en: 'F14', zh: '', bind: null },
    { code: 126, en: 'F15', zh: '', bind: null },
    { code: 127, en: 'F16', zh: '', bind: null },
    { code: 128, en: 'F17', zh: '', bind: null },
    { code: 129, en: 'F18', zh: '', bind: null },
    { code: 130, en: 'F19', zh: '', bind: null },
    { code: 131, en: 'F20', zh: '', bind: null },
    { code: 132, en: 'F21', zh: '', bind: null },
    { code: 133, en: 'F22', zh: '', bind: null },
    { code: 134, en: 'F23', zh: '', bind: null },
    { code: 135, en: 'F24', zh: '', bind: null },
    { code: 136, en: 'Num_Lock', zh: '小键盘-数字锁定键', bind: null },
    { code: 137, en: 'Scroll_Lock', zh: '', bind: null },
    { code: 138, en: '', zh: '', bind: null },
    { code: 139, en: '', zh: '', bind: null },
    { code: 140, en: '', zh: '', bind: null },
    { code: 141, en: '', zh: '', bind: null },
    { code: 142, en: '', zh: '', bind: null },
    { code: 143, en: '', zh: '', bind: null },
    { code: 144, en: '', zh: '', bind: null },
    { code: 145, en: '', zh: '', bind: null },
    { code: 146, en: '', zh: '', bind: null },
    { code: 147, en: '', zh: '', bind: null },
    { code: 148, en: '', zh: '', bind: null },
    { code: 149, en: '', zh: '', bind: null },
    { code: 150, en: '', zh: '', bind: null },
    { code: 151, en: '', zh: '', bind: null },
    { code: 152, en: '', zh: '', bind: null },
    { code: 153, en: '', zh: '', bind: null },
    { code: 154, en: '', zh: '', bind: null },
    { code: 155, en: '', zh: '', bind: null },
    { code: 156, en: '', zh: '', bind: null },
    { code: 157, en: '', zh: '', bind: null },
    { code: 158, en: '', zh: '', bind: null },
    { code: 159, en: '', zh: '', bind: null },
    { code: 160, en: '', zh: '', bind: null },
    { code: 161, en: '', zh: '', bind: null },
    { code: 162, en: '', zh: '', bind: null },
    { code: 163, en: '', zh: '', bind: null },
    { code: 164, en: '', zh: '', bind: null },
    { code: 165, en: '', zh: '', bind: null },
    { code: 166, en: '', zh: '', bind: null },
    { code: 167, en: '', zh: '', bind: null },
    { code: 168, en: '', zh: '', bind: null },
    { code: 169, en: '', zh: '', bind: null },
    { code: 170, en: '', zh: '', bind: null },
    { code: 171, en: '', zh: '', bind: null },
    { code: 172, en: '', zh: '', bind: null },
    { code: 173, en: '', zh: '', bind: null },
    { code: 174, en: '', zh: '', bind: null },
    { code: 175, en: '', zh: '', bind: null },
    { code: 176, en: '', zh: '', bind: null },
    { code: 177, en: '', zh: '', bind: null },
    { code: 178, en: '', zh: '', bind: null },
    { code: 179, en: '', zh: '', bind: null },
    { code: 180, en: '', zh: '', bind: null },
    { code: 181, en: '', zh: '', bind: null },
    { code: 182, en: '', zh: '', bind: null },
    { code: 183, en: '', zh: '', bind: null },
    { code: 184, en: '', zh: '', bind: null },
    { code: 185, en: '', zh: '', bind: null },
    { code: 186, en: '', zh: '', bind: null },
    { code: 187, en: '=+', zh: '= +', bind: null },
    { code: 188, en: ',<', zh: ', <', bind: null },
    { code: 189, en: '-_', zh: '- _', bind: null },
    { code: 190, en: '.>', zh: '. >', bind: null },
    { code: 191, en: '/?', zh: '/ ?', bind: null },
    { code: 192, en: '`~', zh: '` ~', bind: null },
    { code: 193, en: '', zh: '', bind: null },
    { code: 194, en: '', zh: '', bind: null },
    { code: 195, en: '', zh: '', bind: null },
    { code: 196, en: '', zh: '', bind: null },
    { code: 197, en: '', zh: '', bind: null },
    { code: 198, en: '', zh: '', bind: null },
    { code: 199, en: '', zh: '', bind: null },
    { code: 200, en: '', zh: '', bind: null },
    { code: 201, en: '', zh: '', bind: null },
    { code: 202, en: '', zh: '', bind: null },
    { code: 203, en: '', zh: '', bind: null },
    { code: 204, en: '', zh: '', bind: null },
    { code: 205, en: '', zh: '', bind: null },
    { code: 206, en: '', zh: '', bind: null },
    { code: 207, en: '', zh: '', bind: null },
    { code: 208, en: '', zh: '', bind: null },
    { code: 209, en: '', zh: '', bind: null },
    { code: 210, en: 'plusminus hyphen macron', zh: '', bind: null },
    { code: 211, en: '', zh: '', bind: null },
    { code: 212, en: 'copyright registered', zh: '', bind: null },
    { code: 213, en: 'guillemotleft guillemotright', zh: '', bind: null },
    { code: 214, en: 'masculine ordfeminine', zh: '', bind: null },
    { code: 215, en: 'ae AE', zh: '', bind: null },
    { code: 216, en: 'cent yen', zh: '', bind: null },
    { code: 217, en: 'questiondown exclamdown', zh: '', bind: null },
    { code: 218, en: 'onequarter onehalf threequarters', zh: '', bind: null },
    { code: 219, en: '[{', zh: '[ {', bind: null },
    { code: 220, en: '\|', zh: '\ |', bind: null },
    { code: 221, en: ']}', zh: '] }', bind: null },
    { code: 222, en: '\'"', zh: '\' "', bind: null },
    { code: 223, en: '', zh: '', bind: null },
    { code: 224, en: '', zh: '', bind: null },
    { code: 225, en: '', zh: '', bind: null },
    { code: 226, en: '', zh: '', bind: null },
    { code: 227, en: 'multiply division', zh: '', bind: null },
    { code: 228, en: 'acircumflex Acircumflex', zh: '', bind: null },
    { code: 229, en: 'ecircumflex Ecircumflex', zh: '', bind: null },
    { code: 230, en: 'icircumflex Icircumflex', zh: '', bind: null },
    { code: 231, en: 'ocircumflex Ocircumflex', zh: '', bind: null },
    { code: 232, en: 'ucircumflex Ucircumflex', zh: '', bind: null },
    { code: 233, en: 'ntilde Ntilde', zh: '', bind: null },
    { code: 234, en: 'yacute Yacute', zh: '', bind: null },
    { code: 235, en: 'oslash Ooblique', zh: '', bind: null },
    { code: 236, en: 'aring Aring', zh: '', bind: null },
    { code: 237, en: 'ccedilla Ccedilla', zh: '', bind: null },
    { code: 238, en: 'thorn THORN', zh: '', bind: null },
    { code: 239, en: 'eth ETH', zh: '', bind: null },
    { code: 240, en: 'diaeresis cedilla currency', zh: '', bind: null },
    { code: 241, en: 'agrave Agrave atilde Atilde', zh: '', bind: null },
    { code: 242, en: 'egrave Egrave', zh: '', bind: null },
    { code: 243, en: 'igrave Igrave', zh: '', bind: null },
    { code: 244, en: 'ograve Ograve otilde Otilde', zh: '', bind: null },
    { code: 245, en: 'ugrave Ugrave', zh: '', bind: null },
    { code: 246, en: 'adiaeresis Adiaeresis', zh: '', bind: null },
    { code: 247, en: 'ediaeresis Ediaeresis', zh: '', bind: null },
    { code: 248, en: 'idiaeresis Idiaeresis', zh: '', bind: null },
    { code: 249, en: 'odiaeresis Odiaeresis', zh: '', bind: null },
    { code: 250, en: 'udiaeresis Udiaeresis', zh: '', bind: null },
    { code: 251, en: 'ssharp question backslash', zh: '', bind: null },
    { code: 252, en: 'asciicircum degree', zh: '', bind: null },
    { code: 253, en: '3 sterling', zh: '', bind: null },
    { code: 254, en: 'Mode_switch', zh: '', bind: null }
]
onkeydown = function (event) {
    var key = keycode[event.keyCode];
    if (key.code == event.keyCode && key.bind != null) {
        key.bind('keydown');//调用键上绑定的那函数
    }
}
onkeyup = function (event) {
    var key = keycode[event.keyCode];
    if (key.code == event.keyCode && key.bind != null) {
        key.bind('keyup');//调用键上绑定的那函数
    }
}
var mouseEvent = { x: 0, y: 0 };
onmousedown = function (event) {
    mouseEvent.x = event.screenX;
    mouseEvent.y = event.screenY;
}
onmouseup = function (event) {
    mouseEvent.x = 0;
    mouseEvent.y = 0;
    lookLeft('keyup');
    lookRight('keyup');
    lookUp('keyup');
    lookDown('keyup');
}
onmousemove = function (event) {
    if (mouseEvent.x != 0 && mouseEvent.y != 0) {
        //左
        if (mouseEvent.x > event.screenX) {
            lookLeft('keydown');
        }
        //右
        if (mouseEvent.x < event.screenX) {
            lookRight('keydown');
        }
        //上
        if (mouseEvent.y > event.screenY) {
            lookUp('keydown');
        }
        //下
        if (mouseEvent.y < event.screenY) {
            lookDown('keydown');
        }
    }
}
setTimeout(function () {
    operate = new Operates(camera);
}, 0);
function inputUpdate(frame) {
    operate.update(frame);
}
//向前
function forward(type) {
    switch (type) {
        case 'keydown': operate.forward = true; break;
        case 'keyup': operate.forward = false; break;
    }
}
//向后
function backward(type) {
    switch (type) {
        case 'keydown': operate.backward = true; break;
        case 'keyup': operate.backward = false; break;
    }
}
//向左
function turnLeft(type) {
    switch (type) {
        case 'keydown': operate.turnleft = true; break;
        case 'keyup': operate.turnleft = false; break;
    }
}
//向右
function turnRight(type) {
    switch (type) {
        case 'keydown': operate.turnright = true; break;
        case 'keyup': operate.turnright = false; break;
    }
}
//向上
function moveUp(type) {
    switch (type) {
        case 'keydown': operate.moveUp = true; break;
        case 'keyup': operate.moveUp = false; break;
    }
}
//向下
function moveDown(type) {
    switch (type) {
        case 'keydown': operate.moveDown = true; break;
        case 'keyup': operate.moveDown = false; break;
    }
}
//向上看
function lookUp(type) {
    switch (type) {
        case 'keydown': operate.lookVertically = -operate.lookSpeed; break;
        case 'keyup': operate.lookVertically = 0; break;
    }
}
//向下看
function lookDown(type) {
    switch (type) {
        case 'keydown': operate.lookVertically = operate.lookSpeed; break;
        case 'keyup': operate.lookVertically = 0; break;
    }
}
//向左看
function lookLeft(type) {
    switch (type) {
        case 'keydown': operate.lookHorizontally = -operate.lookSpeed; break;
        case 'keyup': operate.lookHorizontally = 0; break;
    }
}
//向右看
function lookRight(type) {
    switch (type) {
        case 'keydown': operate.lookHorizontally = operate.lookSpeed; break;
        case 'keyup': operate.lookHorizontally = 0; break;
    }
}
//操作类
function Operates(camera) {
    this.camera = camera;

    this.movementSpeed = 20;//移动速度
    this.lookSpeed = 8;//看速度

    this.vertical = 0;
    this.horizontal = 0;
    this.planeAngle = 0;
    this.verticalAngle = 0;
    this.zeroVector = new THREE.Vector3(0, 0, 0);
    this.forward = false;
    this.backward = false;
    this.turnleft = false;
    this.turnright = false;
    this.moveUp = false;
    this.moveDown = false;
    this.lookVertically = 0;
    this.lookHorizontally = 0;

    //更新计算（传入帧消耗的毫秒）
    this.update = function (frame) {
        //视角计算
        var realLookSpeed = frame * this.lookSpeed;

        this.horizontal += this.lookHorizontally * realLookSpeed;
        this.vertical -= this.lookVertically * realLookSpeed;

        this.vertical = Math.max(- 85, Math.min(85, this.vertical));
        this.planeAngle = THREE.Math.degToRad(90 - this.vertical);

        this.verticalAngle = THREE.Math.degToRad(this.horizontal);

        var targetPosition = this.zeroVector;
        position = this.camera.position;

        targetPosition.x = position.x + 100 * Math.sin(this.planeAngle) * Math.cos(this.verticalAngle);
        targetPosition.y = position.y + 100 * Math.cos(this.planeAngle);
        targetPosition.z = position.z + 100 * Math.sin(this.planeAngle) * Math.sin(this.verticalAngle);
        this.camera.lookAt(targetPosition);

        //位置计算
        var realMoveSpeed = frame * this.movementSpeed;

        if (this.forward) this.camera.translateZ(- realMoveSpeed);
        if (this.backward) this.camera.translateZ(realMoveSpeed);

        if (this.turnleft) this.camera.translateX(- realMoveSpeed);
        if (this.turnright) this.camera.translateX(realMoveSpeed);

        if (this.moveUp) this.camera.translateY(realMoveSpeed);
        if (this.moveDown) this.camera.translateY(- realMoveSpeed);
    }
}
