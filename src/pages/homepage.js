import React from 'react';
import Modal from 'react-responsive-modal';
import Navbar from '../component/Navbar';
import List from '../component/list' //keluarkan add book dari list namun buat dia tetap berfungsi sebagai add/donate
import Search from '../component/search';
import Data from '../data'

// class Homepage extends React.Component {
function Homepage({showaaLogin, showRegis, kartolo, openDonate, setSearchtul, prop, search, openRegis, onCloseRegis, onCloseLogin, openLogin, openAdd, oncloseAdd, onCloseDonate, openRegSuc, openRegFail, openLogFail, hideRegisFun, hideLoginFun, showRegisFun}) {
    

    // constructor() {
    //     super()
        // this.state = {
        //     regisShow: false,
        //     loginShow: false,
        //     regSuccesShow: false,
        //     regFailedShow: false,
        //     logFailedShow: false,
        //     addBookShow: false,
        //     addBookSuccess: false,
        //     donateBookShow: false,
        //     donateBookSuccess: false,
        //     search:'',
        //     Data

        // }
    
// // login button
//     showLogin = () => {
//         this.setState({loginShow: true})
//     }
//     hideLogin = () => {
//         this.setState({
//             loginShow: false,
//             regisShow: false
//         })
//     }
// // regis button
//     showRegis = () => {
//         this.setState({regisShow: true})
//     }
//     hideRegis = () => {
//         this.setState({
//             regisShow: false,
//             loginShow: false
//         })
//     }
// // add button
//     showAddBook = () => {
//         this.setState({
//             addBookShow: true
//         })
//     }
//     hideAddBook = () => {
//         this.setState({
//             addBookShow: false
//         })
//     }
// // donate button
//     showDonate = () => {
//         this.setState({
//             donateBookShow: true
//         })
//     }
//     hideDonate = () => {
//         this.setState({
//             donateBookShow: false
//         })
//     }

//     setSearch = (kucing) => {
//         this.setState({ search: kucing })
//     }

    // render() {
        return(
            <div>
                <Navbar showLogin={showaaLogin} showRegis={showRegis} kartolo={kartolo} open={openDonate}/>
                <Search setSearchtul={setSearchtul}/>
                <List prop={prop} search={search}  /> {/*showModal={this.showLogin} */}
                <Modal classNames="regis" open={openRegis} onClose={onCloseRegis} >
                    <h2>Registrasi</h2>
                    <div>
                        <div>
                            <p>name:</p>
                        </div>
                        <div>
                            <input type="text" placeholder="what is your name?" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>username:</p>
                        </div>
                        <div>
                            <input type="text" placeholder="what is your name?" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>password:</p>
                        </div>
                        <div>
                            <input type="text" placeholder="what is your name?" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>konfirmasi password:</p>
                        </div>
                        <div>
                            <input type="text" placeholder="what is your name?" />
                        </div>
                    </div>
                    <div>
                        <button onClick={hideRegisFun}>DAFTAR</button>
                    </div>
                </Modal>
                <Modal classNames="login" onClose={onCloseLogin} open={openLogin}>
                    <h2>Login</h2>
                    <div>
                        <div>
                            <p>username:</p>
                        </div>
                        <div>
                            <input type="text" placeholder="what is your name?" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>name:</p>
                        </div>
                        <div>
                            <input type="text" placeholder="what is your name?" />
                        </div>
                    </div>
                    <div>
                        <button onClick={hideLoginFun}>LOG IN</button>
                    </div>
                    <p>belum punya akun? <a onClick={showRegis}>daftar dulu sini</a></p>
                </Modal>
                <Modal classNames="addBook" open={openAdd} onClose={oncloseAdd}>
                    <h2>Add Book Collection</h2>
                    <div>
                        <div>
                            <p>Book Title:</p>
                        </div>
                        <div>
                            <input type="text" placeholder="what is your name?" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Image URL:</p>
                        </div>
                        <div>
                            <input type="text" placeholder="what is your name?" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Description:</p>
                        </div>
                        <div>
                            <textarea placeholder="Description" ></textarea>
                        </div>
                    </div>
                    <div>
                        <button>ADD BOOK</button>
                    </div>
                </Modal>
                <Modal classNames="donate" open={openDonate} onClose={onCloseDonate}>
                    <h2>Donate Book</h2>
                    <div>
                        <div>
                            <p>Book Title:</p>
                        </div>
                        <div>
                            <input type="text" placeholder="what is your name?" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Image URL:</p>
                        </div>
                        <div>
                            <input type="text" placeholder="what is your name?" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Description:</p>
                        </div>
                        <div>
                            <textarea placeholder="Description" ></textarea>
                        </div>
                    </div>
                    <div>
                        <button>DONATE BOOK</button>
                    </div>
                </Modal>
                <Modal classNames="regSucces" open={openRegSuc}>
                    <h2>Congratulation</h2>
                    <p>Registration Succes</p>
                </Modal>
                <Modal classNames="regFailed" open={openRegFail}>
                    <h2>Registration Failed</h2>
                    <p>username is used by other account</p>
                </Modal>
                <Modal classNames="logFailed" open={openLogFail}>
                    <h2>Registration Failed</h2>
                    <p>username or password is not correct</p>
                </Modal>

            </div>
        )
    // }
}

export default Homepage