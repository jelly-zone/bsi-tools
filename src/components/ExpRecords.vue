<template>
    <div id="page">
        <div class="left-box">
            <div style="height: 30px; position: relative; margin-bottom: 10px;margin-right: 10px;">
                <el-button style="position: absolute;left: 0;" type="danger" plain @click="delete_exp_records" >清空记录缓存</el-button>
                <el-button style="position: absolute;right: 100px;" @click="load_exp_records" >读取记录</el-button>
                <el-button style="position: absolute;right: 0;" type="success" plain @click="save_exp_records" >保存记录</el-button>
            </div>
            <el-scrollbar height="85vh" style="padding-right: 10px;">
                <div class="sigle-table-box" @click="selectTableBox(0)" :class="{'selected':cur_table==0}">
                    <div class="table-title-line">
                        <h2 class="m-t-0">3米步行用时</h2>
                        <el-select
                            v-model="groups_of_table[0]"
                            multiple
                            placeholder="选择程序组"
                            style="width: 300px"
                        >
                            <el-option
                                v-for="item in group_options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                        
                    </div>
                    <el-table border :data="rows_0" style="width: 100%">
                        <el-table-column prop="start_at" label="Start" width="170" />
                        <el-table-column prop="end_at" label="End" width="170" />
                        <el-table-column prop="time_length" label="Time(s)" width="150" />
                        <el-table-column prop="programs" label="Programs" width="150" />
                        <el-table-column fixed="right" label="Operations" min-width="120">
                            <template #default="scope">
                                <el-button
                                link
                                type="danger"
                                size="small"
                                @click.prevent="deleteRow(0, scope.$index)"
                                >
                                Remove
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="last-line">
                        <el-button :disabled="cur_table!=0 || is_recording[0]" @click="getCurTime(1)">Start</el-button>
                        <el-button :disabled="cur_table!=0 || !is_recording[0]" @click="getCurTime(2)">End</el-button>
                        <a v-show="is_recording[0]">计时中...</a>
                        <a style="right: 0;bottom: 0;position: absolute;">共{{ rows_0.length }}条记录</a>
                    </div>
                </div>
                <div class="sigle-table-box" @click="selectTableBox(1)" :class="{'selected':cur_table==1}" >
                    <div class="table-title-line">
                        <h2 class="m-t-0">足底压力</h2>
                        <div>
                            <el-select
                                v-model="groups_of_table[1]"
                                multiple
                                placeholder="选择程序组"
                                style="width: 300px"
                            >
                                <el-option
                                    v-for="item in group_options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </div>
                    </div>
                    <el-table border :data="rows_1" style="width: 100%">
                        <el-table-column prop="stim" label="Stimulation" width="130" />
                        <el-table-column prop="start_at" label="Start" width="170" />
                        <el-table-column prop="end_at" label="End" width="170" />
                        <el-table-column prop="time_length" label="Time(s)" width="130"/>
                        <el-table-column prop="programs" label="Programs" width="150" />
                        <el-table-column fixed="right" label="Operations" min-width="120">
                            <template #default="scope">
                                <el-button
                                link
                                type="danger"
                                size="small"
                                @click.prevent="deleteRow(1, scope.$index)"
                                >
                                Remove
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="my-4 ml-4 radio-line-center">
                        <el-radio-group v-model="stim" >
                            <el-radio value="on" size="small">Stim On</el-radio>
                            <el-radio value="off" size="small">Stim Off</el-radio>
                        </el-radio-group>
                    </div>
                    <div class="last-line">
                        <el-button :disabled="cur_table!=1 || is_recording[1]" @click="getCurTime2(1)">Start</el-button>
                        <el-button :disabled="cur_table!=1 || !is_recording[1]" @click="getCurTime2(2)">End</el-button>
                        <a v-show="is_recording[1]">计时中...</a>
                        <a style="right: 0;bottom: 0;position: absolute;">共{{ rows_1.length }}条记录</a>
                    </div>
                </div>
                <div class="sigle-table-box" @click="selectTableBox(2)" :class="{'selected':cur_table==2}">
                    <div class="table-title-line">
                        <h2 class="m-t-0">30秒抬腿</h2>
                        <div>
                            <el-select
                                v-model="groups_of_table[2]"
                                multiple
                                placeholder="选择程序组"
                                style="width: 300px"
                            >
                                <el-option
                                    v-for="item in group_options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </div>
                    </div>
                    <el-table border :data="rows_2" style="width: 100%">
                        <el-table-column prop="side" label="Side" width="90" />
                        <el-table-column prop="lift_num" label="Number" width="90" />
                        <el-table-column prop="start_at" label="Start" width="160" />
                        <el-table-column prop="end_at" label="End" width="160"/>
                        <el-table-column prop="stamps" label="Stamps" width="180"/>
                        <el-table-column prop="programs" label="Programs" width="120" />
                        <el-table-column fixed="right" label="Operations" min-width="120">
                            <template #default="scope">
                                <el-button
                                link
                                type="danger"
                                size="small"
                                @click.prevent="deleteRow(2, scope.$index)"
                                >
                                Remove
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="my-4 ml-4 radio-line-center">
                        <el-radio-group v-model="side_2">
                            <el-radio value="left" size="small">Left</el-radio>
                            <el-radio value="right" size="small">Right</el-radio>
                        </el-radio-group>
                    </div>
                    <div class="last-line">
                        <el-button :disabled="cur_table!=2 || is_recording[2]" @click="getCurTime3(1)">Start</el-button>
                        当前抬腿{{ lift_num }}次
                        <el-button  :disabled="cur_table!=2 || !is_recording[2]" @click="() => { lift_num++; lift_time_stamps.push(new Date()) }" >+1</el-button>
                        <el-button  :disabled="cur_table!=2 || !is_recording[2]" @click="getCurTime3(2)">End</el-button>
                        <div><a v-show="is_recording[2]">计时中...</a>倒计时：{{ timeLeft }}</div>
                        <a style="right: 0;bottom: 0;position: absolute;">共{{ rows_2.length }}条记录</a>
                    </div>
                </div>
                <div class="sigle-table-box" @click="selectTableBox(3)" :class="{'selected':cur_table==3}">
                    <div class="table-title-line">
                        <h2 class="m-t-0">步高</h2>
                        <div>
                            <el-select
                                v-model="groups_of_table[3]"
                                multiple
                                placeholder="选择程序组"
                                style="width: 300px"
                            >
                                <el-option
                                    v-for="item in group_options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </div>
                    </div>
                    <el-table border :data="rows_3" style="width: 100%">
                        <el-table-column prop="side" label="Side" width="90" />
                        <el-table-column prop="intention" label="Intention" width="90" />
                        <el-table-column prop="end_at" label="End" width="170"/>
                        <el-table-column prop="height" label="Height" width="90"/>
                        <el-table-column prop="programs" label="Programs" width="120"/>
                        <el-table-column fixed="right" label="Operations" min-width="120">
                            <template #default="scope">
                                <el-button
                                link
                                type="danger"
                                size="small"
                                @click.prevent="deleteRow(3, scope.$index)"
                                >
                                Remove
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="my-4 ml-4 radio-line-center">
                        <el-radio-group v-model="side_3" style="margin-right: 40px;">
                            <el-radio value="left" size="small">Left</el-radio>
                            <el-radio value="right" size="small">Right</el-radio>
                        </el-radio-group>
                        <el-radio-group v-model="intention">
                            <el-radio value="on" size="small">Intention On</el-radio>
                            <el-radio value="off" size="small">Intention Off</el-radio>
                        </el-radio-group>
                    </div>
                    <div style="position: relative;height: 30px;">
                        <!-- <div style="width: 50%;"></div> -->
                        <div style="right: 120px;position: absolute;">
                        高度：<el-input-number style="width: 120px;" v-model="height" :min="0" :max="99" :step="1" />cm
                        </div>
                        <el-button style="right: 0;position: absolute;" :disabled="cur_table!=3" @click="getCurTime4(2)">Submit</el-button>
                    </div>
                    <div class="last-line" style="height: 20px;">
                    <a style="right: 0;bottom: 0;position: absolute;">共{{ rows_3.length }}条记录</a>
                    </div>
                </div>
            </el-scrollbar>
            <div style="text-align: center;"><el-button :disabled="is_recording[0]||is_recording[1]||is_recording[2]" style="margin-top: 10px;" type="success" @click="exportToExcel">Export Excel</el-button></div>
        </div>
        <div class="right-box">
        <div style="height: 30px; position: relative; margin-bottom: 10px;margin-right: 10px;">
            <el-button style="position: absolute;left: 0;" type="danger" plain @click="delete_stim_config" >清空配置缓存</el-button>
            <el-button style="position: absolute;right: 100px;" @click="load_stim_config" >读取配置</el-button>
            <el-button style="position: absolute;right: 0;" type="success" plain @click="save_stim_config" >保存配置</el-button>
        </div>
        <el-scrollbar height="89vh">
            <div class="pro-group-line">
                <div class="fix-stim-box">
                    <div id="outline-box">
                        <div style="position: absolute;left: 0;">组1-P1</div>
                        <div class="line-box">
                            <div class="single-line-1">
                                <button @click="chooseChannel(0, 0, 0)" class="channel-btn-1" :class="{'red':stim_group[0][0].electrode_status[0]==1, 'blue':stim_group[0][0].electrode_status[0]==2}"><span>1</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(0, 0, 1)" class="channel-btn-2" :class="{'red':stim_group[0][0].electrode_status[1]==1, 'blue':stim_group[0][0].electrode_status[1]==2}" style="left: 0;"><span>2</span></button>
                                <button @click="chooseChannel(0, 0, 8)" class="channel-btn-2" :class="{'red':stim_group[0][0].electrode_status[8]==1, 'blue':stim_group[0][0].electrode_status[8]==2}" style="right: 0;"><span>9</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(0, 0, 2)" class="channel-btn-1" :class="{'red':stim_group[0][0].electrode_status[2]==1, 'blue':stim_group[0][0].electrode_status[2]==2}"><span>3</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(0, 0, 3)" class="channel-btn-2" :class="{'red':stim_group[0][0].electrode_status[3]==1, 'blue':stim_group[0][0].electrode_status[3]==2}" style="left: 0;"><span>4</span></button>
                                <button @click="chooseChannel(0, 0, 9)" class="channel-btn-2" :class="{'red':stim_group[0][0].electrode_status[9]==1, 'blue':stim_group[0][0].electrode_status[9]==2}" style="right: 0;"><span style="left: 0;">10</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(0, 0, 4)" class="channel-btn-1" :class="{'red':stim_group[0][0].electrode_status[4]==1, 'blue':stim_group[0][0].electrode_status[4]==2}"><span>5</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(0, 0, 5)" class="channel-btn-2" :class="{'red':stim_group[0][0].electrode_status[5]==1, 'blue':stim_group[0][0].electrode_status[5]==2}" style="left: 0;"><span>6</span></button>
                                <button @click="chooseChannel(0, 0, 10)" class="channel-btn-2" :class="{'red':stim_group[0][0].electrode_status[10]==1, 'blue':stim_group[0][0].electrode_status[10]==2}" style="right: 0;"><span style="left: 0;">11</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(0, 0, 11)" class="channel-btn-1" :class="{'red':stim_group[0][0].electrode_status[11]==1, 'blue':stim_group[0][0].electrode_status[11]==2}"><span style="left: 0;">12</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(0, 0, 6)" class="channel-btn-2" :class="{'red':stim_group[0][0].electrode_status[6]==1, 'blue':stim_group[0][0].electrode_status[6]==2}" style="left: 0;"><span>7</span></button>
                                <button @click="chooseChannel(0, 0, 12)" class="channel-btn-2" :class="{'red':stim_group[0][0].electrode_status[12]==1, 'blue':stim_group[0][0].electrode_status[12]==2}" style="right: 0;"><span style="left: 0;">13</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(0, 0, 13)" class="channel-btn-1" :class="{'red':stim_group[0][0].electrode_status[13]==1, 'blue':stim_group[0][0].electrode_status[13]==2}"><span style="left: 0;">14</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(0, 0, 7)" class="channel-btn-2" :class="{'red':stim_group[0][0].electrode_status[7]==1, 'blue':stim_group[0][0].electrode_status[7]==2}" style="left: 0;"><span>8</span></button>
                                <button @click="chooseChannel(0, 0, 14)" class="channel-btn-2" :class="{'red':stim_group[0][0].electrode_status[14]==1, 'blue':stim_group[0][0].electrode_status[14]==2}" style="right: 0;"><span style="left: 0;">15</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(0, 0, 15)" class="channel-btn-1" :class="{'red':stim_group[0][0].electrode_status[15]==1, 'blue':stim_group[0][0].electrode_status[15]==2}"><span style="left: 0;">16</span></button>
                            </div>
                        </div>
                    </div>
                    <div id="config-box">
                        <p>触点：
                            <a v-for="cha in stim_group[0][0].posi_channels" :key="cha">{{ cha }}+ </a>
                            <a v-for="cha in stim_group[0][0].neg_channels" :key="cha">{{ cha }}- </a>
                        </p>
                        <p style="position: relative;">幅值(mA)<el-input-number v-model="stim_group[0][0].ma" :step="0.1" class="small-input-number" /></p>
                        <p style="position: relative;">脉宽(μs)<el-input-number v-model="stim_group[0][0].us" :step="10" class="small-input-number" /></p>
                        <p style="position: relative;">频率(Hz)<el-input-number v-model="stim_group[0][0].hz" :step="1" class="small-input-number" /></p>
                    </div>
                </div>
                <div class="fix-stim-box">
                    <div id="outline-box">
                        <div style="position: absolute;left: 0;">组1-P2</div>
                        <div class="line-box">
                            <div class="single-line-1">
                                <button @click="chooseChannel(0, 1, 0)" class="channel-btn-1" :class="{'red':stim_group[0][1].electrode_status[0]==1, 'blue':stim_group[0][1].electrode_status[0]==2}"><span>1</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(0, 1, 1)" class="channel-btn-2" :class="{'red':stim_group[0][1].electrode_status[1]==1, 'blue':stim_group[0][1].electrode_status[1]==2}" style="left: 0;"><span>2</span></button>
                                <button @click="chooseChannel(0, 1, 8)" class="channel-btn-2" :class="{'red':stim_group[0][1].electrode_status[8]==1, 'blue':stim_group[0][1].electrode_status[8]==2}" style="right: 0;"><span>9</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(0, 1, 2)" class="channel-btn-1" :class="{'red':stim_group[0][1].electrode_status[2]==1, 'blue':stim_group[0][1].electrode_status[2]==2}"><span>3</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(0, 1, 3)" class="channel-btn-2" :class="{'red':stim_group[0][1].electrode_status[3]==1, 'blue':stim_group[0][1].electrode_status[3]==2}" style="left: 0;"><span>4</span></button>
                                <button @click="chooseChannel(0, 1, 9)" class="channel-btn-2" :class="{'red':stim_group[0][1].electrode_status[9]==1, 'blue':stim_group[0][1].electrode_status[9]==2}" style="right: 0;"><span style="left: 0;">10</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(0, 1, 4)" class="channel-btn-1" :class="{'red':stim_group[0][1].electrode_status[4]==1, 'blue':stim_group[0][1].electrode_status[4]==2}"><span>5</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(0, 1, 5)" class="channel-btn-2" :class="{'red':stim_group[0][1].electrode_status[5]==1, 'blue':stim_group[0][1].electrode_status[5]==2}" style="left: 0;"><span>6</span></button>
                                <button @click="chooseChannel(0, 1, 10)" class="channel-btn-2" :class="{'red':stim_group[0][1].electrode_status[10]==1, 'blue':stim_group[0][1].electrode_status[10]==2}" style="right: 0;"><span style="left: 0;">11</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(0, 1, 11)" class="channel-btn-1" :class="{'red':stim_group[0][1].electrode_status[11]==1, 'blue':stim_group[0][1].electrode_status[11]==2}"><span style="left: 0;">12</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(0, 1, 6)" class="channel-btn-2" :class="{'red':stim_group[0][1].electrode_status[6]==1, 'blue':stim_group[0][1].electrode_status[6]==2}" style="left: 0;"><span>7</span></button>
                                <button @click="chooseChannel(0, 1, 12)" class="channel-btn-2" :class="{'red':stim_group[0][1].electrode_status[12]==1, 'blue':stim_group[0][1].electrode_status[12]==2}" style="right: 0;"><span style="left: 0;">13</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(0, 1, 13)" class="channel-btn-1" :class="{'red':stim_group[0][1].electrode_status[13]==1, 'blue':stim_group[0][1].electrode_status[13]==2}"><span style="left: 0;">14</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(0, 1, 7)" class="channel-btn-2" :class="{'red':stim_group[0][1].electrode_status[7]==1, 'blue':stim_group[0][1].electrode_status[7]==2}" style="left: 0;"><span>8</span></button>
                                <button @click="chooseChannel(0, 1, 14)" class="channel-btn-2" :class="{'red':stim_group[0][1].electrode_status[14]==1, 'blue':stim_group[0][1].electrode_status[14]==2}" style="right: 0;"><span style="left: 0;">15</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(0, 1, 15)" class="channel-btn-1" :class="{'red':stim_group[0][1].electrode_status[15]==1, 'blue':stim_group[0][1].electrode_status[15]==2}"><span style="left: 0;">16</span></button>
                            </div>
                        </div>
                    </div>
                    <div id="config-box">
                        <p>触点：
                            <a v-for="cha in stim_group[0][1].posi_channels" :key="cha">{{ cha }}+ </a>
                            <a v-for="cha in stim_group[0][1].neg_channels" :key="cha">{{ cha }}- </a>
                        </p>
                        <p style="position: relative;">幅值(mA)<el-input-number v-model="stim_group[0][1].ma" :step="0.1" class="small-input-number" /></p>
                        <p style="position: relative;">脉宽(μs)<el-input-number v-model="stim_group[0][1].us" :step="10" class="small-input-number" /></p>
                        <p style="position: relative;">频率(Hz)<el-input-number v-model="stim_group[0][1].hz" :step="1" class="small-input-number" /></p>
                    </div>
                </div>
            </div>
            <div class="pro-group-line">
                <div class="fix-stim-box">
                    <div id="outline-box">
                        <div style="position: absolute;left: 0;">组2-P1</div>
                        <div class="line-box">
                            <div class="single-line-1">
                                <button @click="chooseChannel(1, 0, 0)" class="channel-btn-1" :class="{'red':stim_group[1][0].electrode_status[0]==1, 'blue':stim_group[1][0].electrode_status[0]==2}"><span>1</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(1, 0, 1)" class="channel-btn-2" :class="{'red':stim_group[1][0].electrode_status[1]==1, 'blue':stim_group[1][0].electrode_status[1]==2}" style="left: 0;"><span>2</span></button>
                                <button @click="chooseChannel(1, 0, 8)" class="channel-btn-2" :class="{'red':stim_group[1][0].electrode_status[8]==1, 'blue':stim_group[1][0].electrode_status[8]==2}" style="right: 0;"><span>9</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(1, 0, 2)" class="channel-btn-1" :class="{'red':stim_group[1][0].electrode_status[2]==1, 'blue':stim_group[1][0].electrode_status[2]==2}"><span>3</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(1, 0, 3)" class="channel-btn-2" :class="{'red':stim_group[1][0].electrode_status[3]==1, 'blue':stim_group[1][0].electrode_status[3]==2}" style="left: 0;"><span>4</span></button>
                                <button @click="chooseChannel(1, 0, 9)" class="channel-btn-2" :class="{'red':stim_group[1][0].electrode_status[9]==1, 'blue':stim_group[1][0].electrode_status[9]==2}" style="right: 0;"><span style="left: 0;">10</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(1, 0, 4)" class="channel-btn-1" :class="{'red':stim_group[1][0].electrode_status[4]==1, 'blue':stim_group[1][0].electrode_status[4]==2}"><span>5</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(1, 0, 5)" class="channel-btn-2" :class="{'red':stim_group[1][0].electrode_status[5]==1, 'blue':stim_group[1][0].electrode_status[5]==2}" style="left: 0;"><span>6</span></button>
                                <button @click="chooseChannel(1, 0, 10)" class="channel-btn-2" :class="{'red':stim_group[1][0].electrode_status[10]==1, 'blue':stim_group[1][0].electrode_status[10]==2}" style="right: 0;"><span style="left: 0;">11</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(1, 0, 11)" class="channel-btn-1" :class="{'red':stim_group[1][0].electrode_status[11]==1, 'blue':stim_group[1][0].electrode_status[11]==2}"><span style="left: 0;">12</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(1, 0, 6)" class="channel-btn-2" :class="{'red':stim_group[1][0].electrode_status[6]==1, 'blue':stim_group[1][0].electrode_status[6]==2}" style="left: 0;"><span>7</span></button>
                                <button @click="chooseChannel(1, 0, 12)" class="channel-btn-2" :class="{'red':stim_group[1][0].electrode_status[12]==1, 'blue':stim_group[1][0].electrode_status[12]==2}" style="right: 0;"><span style="left: 0;">13</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(1, 0, 13)" class="channel-btn-1" :class="{'red':stim_group[1][0].electrode_status[13]==1, 'blue':stim_group[1][0].electrode_status[13]==2}"><span style="left: 0;">14</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(1, 0, 7)" class="channel-btn-2" :class="{'red':stim_group[1][0].electrode_status[7]==1, 'blue':stim_group[1][0].electrode_status[7]==2}" style="left: 0;"><span>8</span></button>
                                <button @click="chooseChannel(1, 0, 14)" class="channel-btn-2" :class="{'red':stim_group[1][0].electrode_status[14]==1, 'blue':stim_group[1][0].electrode_status[14]==2}" style="right: 0;"><span style="left: 0;">15</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(1, 0, 15)" class="channel-btn-1" :class="{'red':stim_group[1][0].electrode_status[15]==1, 'blue':stim_group[1][0].electrode_status[15]==2}"><span style="left: 0;">16</span></button>
                            </div>
                        </div>
                    </div>
                    <div id="config-box">
                        <p>触点：
                            <a v-for="cha in stim_group[1][0].posi_channels" :key="cha">{{ cha }}+ </a>
                            <a v-for="cha in stim_group[1][0].neg_channels" :key="cha">{{ cha }}- </a>
                        </p>
                        <p style="position: relative;">幅值(mA)<el-input-number v-model="stim_group[1][0].ma" :step="0.1" class="small-input-number" /></p>
                        <p style="position: relative;">脉宽(μs)<el-input-number v-model="stim_group[1][0].us" :step="10" class="small-input-number" /></p>
                        <p style="position: relative;">频率(Hz)<el-input-number v-model="stim_group[1][0].hz" :step="1" class="small-input-number" /></p>
                    </div>
                </div>
                <div class="fix-stim-box">
                    <div id="outline-box">
                        <div style="position: absolute;left: 0;">组2-P2</div>
                        <div class="line-box">
                            <div class="single-line-1">
                                <button @click="chooseChannel(1, 1, 0)" class="channel-btn-1" :class="{'red':stim_group[1][1].electrode_status[0]==1, 'blue':stim_group[1][1].electrode_status[0]==2}"><span>1</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(1, 1, 1)" class="channel-btn-2" :class="{'red':stim_group[1][1].electrode_status[1]==1, 'blue':stim_group[1][1].electrode_status[1]==2}" style="left: 0;"><span>2</span></button>
                                <button @click="chooseChannel(1, 1, 8)" class="channel-btn-2" :class="{'red':stim_group[1][1].electrode_status[8]==1, 'blue':stim_group[1][1].electrode_status[8]==2}" style="right: 0;"><span>9</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(1, 1, 2)" class="channel-btn-1" :class="{'red':stim_group[1][1].electrode_status[2]==1, 'blue':stim_group[1][1].electrode_status[2]==2}"><span>3</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(1, 1, 3)" class="channel-btn-2" :class="{'red':stim_group[1][1].electrode_status[3]==1, 'blue':stim_group[1][1].electrode_status[3]==2}" style="left: 0;"><span>4</span></button>
                                <button @click="chooseChannel(1, 1, 9)" class="channel-btn-2" :class="{'red':stim_group[1][1].electrode_status[9]==1, 'blue':stim_group[1][1].electrode_status[9]==2}" style="right: 0;"><span style="left: 0;">10</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(1, 1, 4)" class="channel-btn-1" :class="{'red':stim_group[1][1].electrode_status[4]==1, 'blue':stim_group[1][1].electrode_status[4]==2}"><span>5</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(1, 1, 5)" class="channel-btn-2" :class="{'red':stim_group[1][1].electrode_status[5]==1, 'blue':stim_group[1][1].electrode_status[5]==2}" style="left: 0;"><span>6</span></button>
                                <button @click="chooseChannel(1, 1, 10)" class="channel-btn-2" :class="{'red':stim_group[1][1].electrode_status[10]==1, 'blue':stim_group[1][1].electrode_status[10]==2}" style="right: 0;"><span style="left: 0;">11</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(1, 1, 11)" class="channel-btn-1" :class="{'red':stim_group[1][1].electrode_status[11]==1, 'blue':stim_group[1][1].electrode_status[11]==2}"><span style="left: 0;">12</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(1, 1, 6)" class="channel-btn-2" :class="{'red':stim_group[1][1].electrode_status[6]==1, 'blue':stim_group[1][1].electrode_status[6]==2}" style="left: 0;"><span>7</span></button>
                                <button @click="chooseChannel(1, 1, 12)" class="channel-btn-2" :class="{'red':stim_group[1][1].electrode_status[12]==1, 'blue':stim_group[1][1].electrode_status[12]==2}" style="right: 0;"><span style="left: 0;">13</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(1, 1, 13)" class="channel-btn-1" :class="{'red':stim_group[1][1].electrode_status[13]==1, 'blue':stim_group[1][1].electrode_status[13]==2}"><span style="left: 0;">14</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(1, 1, 7)" class="channel-btn-2" :class="{'red':stim_group[1][1].electrode_status[7]==1, 'blue':stim_group[1][1].electrode_status[7]==2}" style="left: 0;"><span>8</span></button>
                                <button @click="chooseChannel(1, 1, 14)" class="channel-btn-2" :class="{'red':stim_group[1][1].electrode_status[14]==1, 'blue':stim_group[1][1].electrode_status[14]==2}" style="right: 0;"><span style="left: 0;">15</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(1, 1, 15)" class="channel-btn-1" :class="{'red':stim_group[1][1].electrode_status[15]==1, 'blue':stim_group[1][1].electrode_status[15]==2}"><span style="left: 0;">16</span></button>
                            </div>
                        </div>
                    </div>
                    <div id="config-box">
                        <p>触点：
                            <a v-for="cha in stim_group[1][1].posi_channels" :key="cha">{{ cha }}+ </a>
                            <a v-for="cha in stim_group[1][1].neg_channels" :key="cha">{{ cha }}- </a>
                        </p>
                        <p style="position: relative;">幅值(mA)<el-input-number v-model="stim_group[1][1].ma" :step="0.1" class="small-input-number" /></p>
                        <p style="position: relative;">脉宽(μs)<el-input-number v-model="stim_group[1][1].us" :step="10" class="small-input-number" /></p>
                        <p style="position: relative;">频率(Hz)<el-input-number v-model="stim_group[1][1].hz" :step="1" class="small-input-number" /></p>
                    </div>
                </div>
            </div>
            <div class="pro-group-line">
                <div class="fix-stim-box">
                    <div id="outline-box">
                        <div style="position: absolute;left: 0;">组3-P1</div>
                        <div class="line-box">
                            <div class="single-line-1">
                                <button @click="chooseChannel(2, 0, 0)" class="channel-btn-1" :class="{'red':stim_group[2][0].electrode_status[0]==1, 'blue':stim_group[2][0].electrode_status[0]==2}"><span>1</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(2, 0, 1)" class="channel-btn-2" :class="{'red':stim_group[2][0].electrode_status[1]==1, 'blue':stim_group[2][0].electrode_status[1]==2}" style="left: 0;"><span>2</span></button>
                                <button @click="chooseChannel(2, 0, 8)" class="channel-btn-2" :class="{'red':stim_group[2][0].electrode_status[8]==1, 'blue':stim_group[2][0].electrode_status[8]==2}" style="right: 0;"><span>9</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(2, 0, 2)" class="channel-btn-1" :class="{'red':stim_group[2][0].electrode_status[2]==1, 'blue':stim_group[2][0].electrode_status[2]==2}"><span>3</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(2, 0, 3)" class="channel-btn-2" :class="{'red':stim_group[2][0].electrode_status[3]==1, 'blue':stim_group[2][0].electrode_status[3]==2}" style="left: 0;"><span>4</span></button>
                                <button @click="chooseChannel(2, 0, 9)" class="channel-btn-2" :class="{'red':stim_group[2][0].electrode_status[9]==1, 'blue':stim_group[2][0].electrode_status[9]==2}" style="right: 0;"><span style="left: 0;">10</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(2, 0, 4)" class="channel-btn-1" :class="{'red':stim_group[2][0].electrode_status[4]==1, 'blue':stim_group[2][0].electrode_status[4]==2}"><span>5</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(2, 0, 5)" class="channel-btn-2" :class="{'red':stim_group[2][0].electrode_status[5]==1, 'blue':stim_group[2][0].electrode_status[5]==2}" style="left: 0;"><span>6</span></button>
                                <button @click="chooseChannel(2, 0, 10)" class="channel-btn-2" :class="{'red':stim_group[2][0].electrode_status[10]==1, 'blue':stim_group[2][0].electrode_status[10]==2}" style="right: 0;"><span style="left: 0;">11</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(2, 0, 11)" class="channel-btn-1" :class="{'red':stim_group[2][0].electrode_status[11]==1, 'blue':stim_group[2][0].electrode_status[11]==2}"><span style="left: 0;">12</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(2, 0, 6)" class="channel-btn-2" :class="{'red':stim_group[2][0].electrode_status[6]==1, 'blue':stim_group[2][0].electrode_status[6]==2}" style="left: 0;"><span>7</span></button>
                                <button @click="chooseChannel(2, 0, 12)" class="channel-btn-2" :class="{'red':stim_group[2][0].electrode_status[12]==1, 'blue':stim_group[2][0].electrode_status[12]==2}" style="right: 0;"><span style="left: 0;">13</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(2, 0, 13)" class="channel-btn-1" :class="{'red':stim_group[2][0].electrode_status[13]==1, 'blue':stim_group[2][0].electrode_status[13]==2}"><span style="left: 0;">14</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(2, 0, 7)" class="channel-btn-2" :class="{'red':stim_group[2][0].electrode_status[7]==1, 'blue':stim_group[2][0].electrode_status[7]==2}" style="left: 0;"><span>8</span></button>
                                <button @click="chooseChannel(2, 0, 14)" class="channel-btn-2" :class="{'red':stim_group[2][0].electrode_status[14]==1, 'blue':stim_group[2][0].electrode_status[14]==2}" style="right: 0;"><span style="left: 0;">15</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(2, 0, 15)" class="channel-btn-1" :class="{'red':stim_group[2][0].electrode_status[15]==1, 'blue':stim_group[2][0].electrode_status[15]==2}"><span style="left: 0;">16</span></button>
                            </div>
                        </div>
                    </div>
                    <div id="config-box">
                        <p>触点：
                            <a v-for="cha in stim_group[2][0].posi_channels" :key="cha">{{ cha }}+ </a>
                            <a v-for="cha in stim_group[2][0].neg_channels" :key="cha">{{ cha }}- </a>
                        </p>
                        <p style="position: relative;">幅值(mA)<el-input-number v-model="stim_group[2][0].ma" :step="0.1" class="small-input-number" /></p>
                        <p style="position: relative;">脉宽(μs)<el-input-number v-model="stim_group[2][0].us" :step="10" class="small-input-number" /></p>
                        <p style="position: relative;">频率(Hz)<el-input-number v-model="stim_group[2][0].hz" :step="1" class="small-input-number" /></p>
                    </div>
                </div>
                <div class="fix-stim-box">
                    <div id="outline-box">
                        <div style="position: absolute;left: 0;">组3-P2</div>
                        <div class="line-box">
                            <div class="single-line-1">
                                <button @click="chooseChannel(2, 1, 0)" class="channel-btn-1" :class="{'red':stim_group[2][1].electrode_status[0]==1, 'blue':stim_group[2][1].electrode_status[0]==2}"><span>1</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(2, 1, 1)" class="channel-btn-2" :class="{'red':stim_group[2][1].electrode_status[1]==1, 'blue':stim_group[2][1].electrode_status[1]==2}" style="left: 0;"><span>2</span></button>
                                <button @click="chooseChannel(2, 1, 8)" class="channel-btn-2" :class="{'red':stim_group[2][1].electrode_status[8]==1, 'blue':stim_group[2][1].electrode_status[8]==2}" style="right: 0;"><span>9</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(2, 1, 2)" class="channel-btn-1" :class="{'red':stim_group[2][1].electrode_status[2]==1, 'blue':stim_group[2][1].electrode_status[2]==2}"><span>3</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(2, 1, 3)" class="channel-btn-2" :class="{'red':stim_group[2][1].electrode_status[3]==1, 'blue':stim_group[2][1].electrode_status[3]==2}" style="left: 0;"><span>4</span></button>
                                <button @click="chooseChannel(2, 1, 9)" class="channel-btn-2" :class="{'red':stim_group[2][1].electrode_status[9]==1, 'blue':stim_group[2][1].electrode_status[9]==2}" style="right: 0;"><span style="left: 0;">10</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(2, 1, 4)" class="channel-btn-1" :class="{'red':stim_group[2][1].electrode_status[4]==1, 'blue':stim_group[2][1].electrode_status[4]==2}"><span>5</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(2, 1, 5)" class="channel-btn-2" :class="{'red':stim_group[2][1].electrode_status[5]==1, 'blue':stim_group[2][1].electrode_status[5]==2}" style="left: 0;"><span>6</span></button>
                                <button @click="chooseChannel(2, 1, 10)" class="channel-btn-2" :class="{'red':stim_group[2][1].electrode_status[10]==1, 'blue':stim_group[2][1].electrode_status[10]==2}" style="right: 0;"><span style="left: 0;">11</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(2, 1, 11)" class="channel-btn-1" :class="{'red':stim_group[2][1].electrode_status[11]==1, 'blue':stim_group[2][1].electrode_status[11]==2}"><span style="left: 0;">12</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(2, 1, 6)" class="channel-btn-2" :class="{'red':stim_group[2][1].electrode_status[6]==1, 'blue':stim_group[2][1].electrode_status[6]==2}" style="left: 0;"><span>7</span></button>
                                <button @click="chooseChannel(2, 1, 12)" class="channel-btn-2" :class="{'red':stim_group[2][1].electrode_status[12]==1, 'blue':stim_group[2][1].electrode_status[12]==2}" style="right: 0;"><span style="left: 0;">13</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(2, 1, 13)" class="channel-btn-1" :class="{'red':stim_group[2][1].electrode_status[13]==1, 'blue':stim_group[2][1].electrode_status[13]==2}"><span style="left: 0;">14</span></button>
                            </div>
                            <div class="single-line-2">
                                <button @click="chooseChannel(2, 1, 7)" class="channel-btn-2" :class="{'red':stim_group[2][1].electrode_status[7]==1, 'blue':stim_group[2][1].electrode_status[7]==2}" style="left: 0;"><span>8</span></button>
                                <button @click="chooseChannel(2, 1, 14)" class="channel-btn-2" :class="{'red':stim_group[2][1].electrode_status[14]==1, 'blue':stim_group[2][1].electrode_status[14]==2}" style="right: 0;"><span style="left: 0;">15</span></button>
                            </div>
                            <div class="single-line-1">
                                <button @click="chooseChannel(2, 1, 15)" class="channel-btn-1" :class="{'red':stim_group[2][1].electrode_status[15]==1, 'blue':stim_group[2][1].electrode_status[15]==2}"><span style="left: 0;">16</span></button>
                            </div>
                        </div>
                    </div>
                    <div id="config-box">
                        <p>触点：
                            <a v-for="cha in stim_group[2][1].posi_channels" :key="cha">{{ cha }}+ </a>
                            <a v-for="cha in stim_group[2][1].neg_channels" :key="cha">{{ cha }}- </a>
                        </p>
                        <p style="position: relative;">幅值(mA)<el-input-number v-model="stim_group[2][1].ma" :step="0.1" class="small-input-number" /></p>
                        <p style="position: relative;">脉宽(μs)<el-input-number v-model="stim_group[2][1].us" :step="10" class="small-input-number" /></p>
                        <p style="position: relative;">频率(Hz)<el-input-number v-model="stim_group[2][1].hz" :step="1" class="small-input-number" /></p>
                    </div>
                </div>
            </div>
        </el-scrollbar>
        </div>
    </div>
</template>

<script>
import * as XLSX from 'xlsx'
export default {
    name: 'ExpRecords',
    components: {
    },
    data() {
        return {
            cur_table: 0,  // 选中的table 带边框
            is_recording: [false, false, false, false],
            start_at: new Date(),
            side_2: 'left', // 抬腿
            side_3: 'left', // 步高
            stim: 'off',
            intention: 'off',
            lift_num: 0,
            timeLeft: 30,
            timer: null,
            height: 0,
            rows_0: [],  // 3米用时
            rows_1: [],  // 30秒抬腿
            rows_2: [],  // 足底压力
            rows_3: [],  // 步高
            lift_time_stamps: [],
            is_vis: [true, true, true, true],
            three_meter_time_records: [],
            step_height_records: [],
            lift_num_records: [],
            group_options: [
                { label: '程序组1', value: 'Group1'}, 
                { label: '程序组2', value: 'Group2'}, 
                { label: '程序组3', value: 'Group3'}, 
            ],
            groups_of_table: [[],[],[],[]],
            stim_group: [
                [ // group 1
                    {
                        program: 'Group1-P1',
                        electrode_status: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        posi_channels:[],
                        neg_channels: [],
                        ma: 0,
                        us: 0,
                        hz: 0,
                        submit_time: null
                    },
                    {
                        program: 'Group1-P2',
                        electrode_status: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        posi_channels:[],
                        neg_channels: [],
                        ma: 0,
                        us: 0,
                        hz: 0,
                        submit_time: null
                    },
                ],
                [ // group 2
                    {
                        program: 'Group2-P1',
                        electrode_status: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        posi_channels:[],
                        neg_channels: [],
                        ma: 0,
                        us: 0,
                        hz: 0,
                        submit_time: null
                    },
                    {
                        program: 'Group2-P2',
                        electrode_status: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        posi_channels:[],
                        neg_channels: [],
                        ma: 0,
                        us: 0,
                        hz: 0,
                        submit_time: null
                    },
                ],
                [ // group 3
                    {
                        program: 'Group3-P1',
                        electrode_status: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        posi_channels:[],
                        neg_channels: [],
                        ma: 0,
                        us: 0,
                        hz: 0,
                        submit_time: null
                    },
                    {
                        program: 'Group3-P1',
                        electrode_status: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        posi_channels:[],
                        neg_channels: [],
                        ma: 0,
                        us: 0,
                        hz: 0,
                        submit_time: null
                    },
                ],
            ],
        }
    },
    computed: {
    },
    methods: {
        selectTableBox(index) {
            this.cur_table = index
        },
        deleteRow(table_index, index) {
            console.log(table_index, index)
            switch (table_index) {
                case 0:
                    this.rows_0.splice(index, 1)
                    break
                case 1:
                    this.rows_1.splice(index, 1)
                    break
                case 2:
                    this.rows_2.splice(index, 1)
                    break
                case 3:
                    this.rows_3.splice(index, 1)
                    break
                default:
                    break
            }
        },
        getCurTime(time_type) { // 3米用时
            if (time_type == 1) {
                this.start_at = new Date()
                this.is_recording[0] = true
            }
            else {
                // if (!this.start_at) return
                this.is_recording[0] = false
                let end_at = new Date() 
                let start_at = this.start_at
                let time_length = (end_at - start_at) / 1000  // 秒
                let mon = end_at.getMonth() + 1
                if (mon < 10) mon = '0' + mon.toString()
                let day = [end_at.getFullYear(), mon, end_at.getDate()]
                this.rows_0.push({
                    start_at: day.join('-') + ' ' + start_at.toTimeString().split(' ')[0],
                    end_at: day.join('-') + ' ' + end_at.toTimeString().split(' ')[0],
                    time_length: time_length,
                    programs: this.groups_of_table[0].join(' ')
                })
                console.log(this.rows_0)
                this.start_at = new Date()
            }
        },
        getCurTime2(time_type) { //足底压力
            if (time_type == 1) {
                this.is_recording[1] = true 
                this.start_at = new Date()
            }
            else {
                // if (!this.start_at) return
                this.is_recording[1] = false
                let end_at = new Date() 
                let start_at = this.start_at
                let time_length = (end_at - start_at) / 1000  // 秒
                let mon = end_at.getMonth() + 1
                if (mon < 10) mon = '0' + mon
                let day = [end_at.getFullYear(), mon, end_at.getDate()]
                this.rows_1.push({
                    stim: this.stim,
                    start_at: day.join('-') + ' ' + start_at.toTimeString().split(' ')[0],
                    end_at: day.join('-') + ' ' + end_at.toTimeString().split(' ')[0],
                    time_length: time_length,
                    programs: this.groups_of_table[1].join(' ')
                })
                this.start_at = new Date()
            }
        },
        getCurTime3(time_type) { // 抬腿次数
            if (time_type == 1) {
                this.is_recording[2] = true
                this.start_at = new Date()
                if (!this.timer) { 
                    this.timer = setInterval(() => { 
                        if (this.timeLeft > 0) { 
                            this.timeLeft--; 
                        } else { 
                            this.stopTimer(); 
                        } 
                    }, 1000); 
                }
            }
            else {
                if (!this.start_at) return
                this.is_recording[2] = false
                clearInterval(this.timer);
                this.timer = null;
                let end_at = new Date() 
                let start_at = this.start_at
                let stamps = []
                let mon = end_at.getMonth() + 1
                if (mon < 10) mon = '0' + mon
                let day = [end_at.getFullYear(), mon, end_at.getDate()]
                this.lift_time_stamps.forEach(el => {
                    stamps.push(el.toTimeString().split(' ')[0])
                })
                this.rows_2.push({
                    side: this.side_2,
                    start_at: day.join('-') + ' ' + start_at.toTimeString().split(' ')[0],
                    end_at: day.join('-') + ' ' + end_at.toTimeString().split(' ')[0],
                    lift_num: this.lift_num,
                    stamps: stamps.join(' '),
                    programs: this.groups_of_table[2].join(' ')
                })
                this.start_at = new Date()
                this.timeLeft = 30
                this.lift_num = 0
                this.lift_time_stamps = []
            }
        },
        getCurTime4() { //步高
            let end_at = new Date() 
            let mon = end_at.getMonth() + 1
            if (mon < 10) mon = '0' + mon
            let day = [end_at.getFullYear(), mon, end_at.getDate()]
            this.rows_3.push({
                side: this.side_3,
                intention: this.intention,
                height: this.height,
                end_at: day.join('-') + ' ' + end_at.toTimeString().split(' ')[0],
                programs: this.groups_of_table[3].join(' ')
            })
        },
        stopTimer() {
            clearInterval(this.timer);
            this.timer = null;
        },
        getFullTimeStamp() {
            let now = new Date()
            let mon = now.getMonth() + 1
            if (mon < 10) mon = '0' + mon
            let day = [now.getFullYear(), mon, now.getDate()]
            let time = now.toTimeString().split(' ')[0].split(':')
            return day.join('-') + '-' + time.join('-')
        },
        // flattenTableData2(data) {
        //     const maxStampsLength = Math.max(...data.map(item => item.stamps?.length || 0))
            
        //     return data.map(item => {
        //         const flatItem = {
        //             id: item.id,
        //             side: item.side,
        //             start_at: item.start_at,
        //             end_at: item.end_at,
        //             lift_num: item.lift_num,
        //         }
                
        //         // 将stamps数组的每个元素放到单独的属性中
        //         if (item.stamps) {
        //         item.stamps.forEach((stamp, index) => {
        //             flatItem[`stamp_${index + 1}`] = stamp
        //         })
        //         }
        //         // 确保所有行有相同数量的列（用空值填充缺少的stamp）
        //         for (let i = (item.stamps?.length || 0); i < maxStampsLength; i++) {
        //         flatItem[`stamp_${i + 1}`] = ''
        //         }
                
        //         return flatItem
        //     })
        // },
        exportToExcel() {
            // console.log(this.stim_group)
            const props = ['program', 'channels', 'ma', 'us', 'hz', 'submit_time'];
            // 转换数据
            const stim_config_list = this.stim_group.flat().map(obj => {
                const new_obj = {}
                props.forEach(prop => {
                    if (prop === 'channels') {
                        let str1 = obj['posi_channels'].length ? obj['posi_channels'].join('+ ')+'+ ' : ''
                        let str2 = obj['neg_channels'].length ? obj['neg_channels'].join('- ')+'- ' : ''
                        new_obj[prop] = str1 + str2
                    } 
                    else {
                        new_obj[prop] = obj[prop] !== undefined ? obj[prop] : ''
                    }
                })
                return new_obj
            })

            const wb = XLSX.utils.book_new()
            const stim_config = XLSX.utils.json_to_sheet(stim_config_list)
            XLSX.utils.book_append_sheet(wb, stim_config, "参数组合")
            const exp_s1 = XLSX.utils.json_to_sheet(this.rows_0)
            XLSX.utils.book_append_sheet(wb, exp_s1, "3米用时")
            const exp_s2 = XLSX.utils.json_to_sheet(this.rows_1)
            XLSX.utils.book_append_sheet(wb, exp_s2, "足底压力")
            const exp_s3 = XLSX.utils.json_to_sheet(this.rows_2)
            XLSX.utils.book_append_sheet(wb, exp_s3, "30秒抬腿次数")
            const exp_s4 = XLSX.utils.json_to_sheet(this.rows_3)
            XLSX.utils.book_append_sheet(wb, exp_s4, "步高")
            let name = this.getFullTimeStamp() + '_exp_records.xlsx'
            XLSX.writeFile(wb, name)
            
        },
        load_exp_records() {
            this.rows_0 = localStorage.getItem('rows_0') ? JSON.parse(localStorage.getItem('rows_0')) : []
            this.rows_1 = localStorage.getItem('rows_1') ? JSON.parse(localStorage.getItem('rows_1')) : []
            this.rows_2 = localStorage.getItem('rows_2') ? JSON.parse(localStorage.getItem('rows_2')) : []
            this.rows_3 = localStorage.getItem('rows_3') ? JSON.parse(localStorage.getItem('rows_3')) : []
        },
        save_exp_records() {
            localStorage.setItem('rows_0', JSON.stringify(this.rows_0))
            localStorage.setItem('rows_1', JSON.stringify(this.rows_1))
            localStorage.setItem('rows_2', JSON.stringify(this.rows_2))
            localStorage.setItem('rows_3', JSON.stringify(this.rows_3))
        },
        delete_exp_records() {
            localStorage.removeItem('rows_0')
            localStorage.removeItem('rows_1')
            localStorage.removeItem('rows_2')
            localStorage.removeItem('rows_3')
        },
        load_stim_config() {
            if (!localStorage.getItem('stim_group')) return
            this.stim_group = JSON.parse(localStorage.getItem('stim_group'))
        },
        save_stim_config() {
            let cur_time = this.getFullTimeStamp()
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 2; j++) {
                    this.stim_group[i][j]['submit_time'] = cur_time
                }
            }
            localStorage.setItem('stim_group', JSON.stringify(this.stim_group))
        },
        delete_stim_config() {
            localStorage.removeItem('stim_group')
        },
        chooseChannel(gnum, pnum, id) {
            let cur_id = this.stim_group[gnum][pnum].electrode_status[id]
            switch (cur_id) {
                case 0:
                    this.stim_group[gnum][pnum].electrode_status[id] = 1  //变正
                    break;
                case 1:
                    this.stim_group[gnum][pnum].electrode_status[id] = 2  //变负
                    break;
                case 2:
                    this.stim_group[gnum][pnum].electrode_status[id] = 0  //变灰
                    break;
            }
            let posi_tmp = [], neg_tmp = []
            this.stim_group[gnum][pnum].electrode_status.forEach((val, index) => {
                if (val == 1) posi_tmp.push(index + 1)
                else if(val == 2) neg_tmp.push(index + 1)
            })
            this.stim_group[gnum][pnum].posi_channels = posi_tmp
            this.stim_group[gnum][pnum].neg_channels = neg_tmp
        },
    },
    mounted() {
        this.load_exp_records()
        this.load_stim_config()
    }
}
</script>

<style lang="less">
@blue_elec: rgb(150, 200, 225);
@red_elec: rgb(255, 128, 128);
@light_border_color: #dcdfe6;
@dark_boder_color: #909399;
// button圆角混合器
.btn-border-radius(@radius) {
  border-radius: @radius;
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
}
// 单行混合器
.define-size-posi(@width, @height, @position) {
    width:@width;
    height:@height;
    position:@position;
}
// #app {
//     font-family: Avenir, Helvetica, Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-align: center;
//     color: #2c3e50;
// }
#page {
    margin: 20px 20px;
    box-sizing: border-box;
    display: flex;
}
.left-box {
    height: 100%;
    width: 64%;
    .sigle-table-box {
        >* {
            margin-bottom: 10px;
        }
        .radio-line-center {
            text-align: center;
        }
        .last-line {
            text-align: center;
            position: relative;
        }
        .table-title-line {
            position: relative;
        }
        &:active {
            border: 3px solid @dark_boder_color;
        }
        &.selected {
            border: 3px solid @dark_boder_color;
        }
        .m-t-0 {
            margin-top: 0;
            padding-top: 0;
        }
        margin-bottom: 50px;
        padding: 10px;
        border: 3px dashed @light_border_color;
        border-radius:5px;
    }
}
.right-box {
    margin-left: 50px;
    .pro-group-line {
        display: flex;
    }
}
.fix-stim-box {
    height: 360px;
    display: flex;
    flex-direction: column;
    margin: 0 10px 10px 0;
    padding: 10px;
    left: 50px;
    top: 50px;
    text-align: left;
    border: 3px dashed @light_border_color;
    border-radius:5px;
}
#outline-box {
    position: relative;
    padding-left: 60px;
    width: 110px;
    text-align: left;
}
#config-box {
    font-size: 14px;
    .small-input-number {
        .define-size-posi(113px, 21px, absolute);
        font-size: 13px;
        left: 60px;
        line-height: 21px;
    }
    :last-child {
        margin-bottom: 0;
    }
}
.line-box {
    width: 50px;
}
.single-line {
    &-1 {
        .define-size-posi(50px, 20px, relative);
        text-align: center;
    }
    &-2 {
        .define-size-posi(50px, 20px, relative);
        :first-child {
            margin-right: 18px;
        }
    }
}
.channel-btn {
    &-1 {
        &.red {
            background-color: @red_elec;
            border-color: @red_elec;
            &:active {
                background-color: @blue_elec;
                border-color: @blue_elec;
            }
        }
        &.blue {
            background-color: @blue_elec;
            border-color: @blue_elec;
            &:active {
                background-color: buttonface;
                border-color: buttonface;
            }
        }
        .btn-border-radius(5px);
        .define-size-posi(14px, 18px, relative);
        border-color: buttonface;
        font-size: 10px;
        * {
            position: absolute;
            top: 0.5px;
            left: 3px;
        }
        &:active {
            background-color: @red_elec;
            border-color: @red_elec;
        }
    }
    &-2 {
        &.red {
            background-color: @red_elec;
            border-color: @red_elec;
            &:active {
                background-color: @blue_elec;
                border-color: @blue_elec;
            }
        }
        &.blue {
            background-color: @blue_elec;
            border-color: @blue_elec;
            &:active {
                background-color: buttonface;
                border-color: buttonface;
            }
        }
        .btn-border-radius(5px);
        .define-size-posi(14px, 18px, relative);
        border-color: buttonface;
        font-size: 10px;
        * {
            position: absolute;
            top: 0.5px;
            left: 3px;
        }
        &:active {
            background-color: @red_elec;
            border-color: @red_elec;
        }
    }
}
</style>
