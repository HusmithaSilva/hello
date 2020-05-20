import React, {Component} from 'react';

import './App.css';

class Add extends Component{

  constructor() {
    super();
    this.state = {
      pid: '',
      pname: '',
      parea: '',
      pcat: '',
      pprice: '',
      pdis: ''
    }
    this.changepid = this.changepid.bind(this);
    this.submitform = this.submitform.bind(this);
  }

  submitform(event){
    alert(this.state.pid);
    event.preventDefault();
  }

  changepid(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
        <div className="App">
          <h2 className="text-center">Product Manipulation</h2>
          <div className="jumbotron jumbotron-fluid mx-auto w-75">
            <div className="container">
              <h1 className="display-4">Add Product</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloremque error ex facere nemo omnis quo velit! Accusantium adipisci consectetur, consequuntur error, facilis iste maxime minima nostrum ratione repellendus reprehenderit!</p>
            </div>
          </div>
          <div className="mx-auto w-50 mt-4">
            <form onSubmit={this.submitform}>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Product ID</label>
                <input type="text" className="form-control" id="formGroupExampleInput" name="pid" value={this.state.pid} onChange={this.changepid}
                       placeholder="Enter product ID"/>
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Product Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" name="pname"
                       placeholder="Enter product name"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name="parea" rows="3"></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Category</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" name="pcat"
                       placeholder="Enter product name"/>
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Price</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" name="pprice"
                       placeholder="Enter product name"/>
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">discount</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" name="pdis"
                       placeholder="Enter product name"/>
              </div>

              <button type="submit" className="btn btn-primary">submit</button>


            </form>
          </div>


          {/*<div className="jumbotron jumbotron-fluid mx-auto w-75">*/}
          {/*  <div className="container">*/}
          {/*    <h1 className="display-4">Update Product</h1>*/}
          {/*    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*  <div className="mx-auto w-50 mt-4">*/}
          {/*  <form>*/}
          {/*      <div className="form-group">*/}
          {/*          <label htmlFor="formGroupExampleInput">Product ID</label>*/}
          {/*          <input type="text" className="form-control" id="formGroupExampleInput"*/}
          {/*                 placeholder="Enter new Product ID"/>*/}
          {/*      </div>*/}
          {/*      <button type="button" className="btn btn-dark">Save</button>*/}

          {/*      <div className="form-group">*/}
          {/*          <label htmlFor="formGroupExampleInput">Product Name</label>*/}
          {/*          <input type="text" className="form-control" id="formGroupExampleInput"*/}
          {/*                 placeholder="Enter new Product name"/>*/}
          {/*      </div>*/}
          {/*      <button type="button" className="btn btn-dark">Save</button>*/}

          {/*      <div className="form-group">*/}
          {/*          <label htmlFor="exampleFormControlTextarea1">Description</label>*/}
          {/*          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>*/}
          {/*      </div>*/}
          {/*      <button type="button" className="btn btn-dark">Save</button>*/}
          {/*  </form>*/}
          {/*  </div >*/}
          {/*  <div className="jumbotron jumbotron-fluid mx-auto w-75">*/}
          {/*      <div className="container">*/}
          {/*          <h1 className="display-4">Delete Product</h1>*/}
          {/*          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>*/}
          {/*      </div>*/}
          {/*  </div>*/}
          {/*  <div className="mx-auto w-50 mt-4">*/}
          {/*  <form>*/}
          {/*      <div className="form-group">*/}
          {/*          <label htmlFor="formGroupExampleInput">Product ID</label>*/}
          {/*          <input type="text" className="form-control" id="formGroupExampleInput"*/}
          {/*                 placeholder="Example input placeholder"/>*/}
          {/*      </div>*/}


          {/*      <button type="button" className="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i>Delete</button>*/}


          {/*  </form>*/}
          {/*  </div>*/}

          {/*testing*/}
        </div>
    );
  }


}

export default Add;
