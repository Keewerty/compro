import { createSignal } from "solid-js";
import { apiUrl,apiDummy, api } from "../config/api";

export class DataPoiResponse {
    summary: any;
    poi: any;
    detail: any;
    sites: any;
}


const getDetailPoi = async (poi_name: string) => {
    const [data, setData] = createSignal(new DataPoiResponse());
    const [error, setError] = createSignal();

    const url = `${apiUrl}/posko_naru_afterclick?poi_name=${poi_name}`;
    await fetch(url, { headers: { "Content-type": "application/json;charset=UTF-8" } }).then((res) => res.json())
        .then((data) => {
            setData(data);
        }
        ).catch((err) => {
            setError(err);
            // // // console.log(error());
        });
    return data();
}

const getSummaryNaru = async () => {
    const [data, setData] = createSignal(new DataPoiResponse());
    const [error, setError] = createSignal();

    const url = `${apiUrl}/get_poi_data`;
    await fetch(url, { headers: { "Content-type": "application/json;charset=UTF-8" } }).then((res) => res.json())
        .then((data: DataPoiResponse) => {
            setData(data);
        }
        ).catch((err) => {
            setError(err);
            // // // console.log(error());
        });
    return data();
}

const getDataMap = async () => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();

    const url = `${apiDummy}map.json`;
    await fetch(url, { headers: { "Content-type": "application/json;charset=UTF-8" } }).then((res) => res.json())
        .then((data) => {
            setData(data);
        }
        ).catch((err) => {
            setError(err);
            // // // console.log(error());
        });
    return data();
}

const getDetailPoi2 = async (poi_name: string) => {
    const [data, setData] = createSignal(new DataPoiResponse());
    const [error, setError] = createSignal();

    const url = `${apiDummy}search.json`;
    await fetch(url, { headers: { "Content-type": "application/json;charset=UTF-8" } }).then((res) => res.json())
        .then((data) => {
            setData(data);
        }
        ).catch((err) => {
            setError(err);
            // // // console.log(error());
        });
    return data();
}
const register = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}insert`;
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // // console.log(err);
        });
    return data();
};


const getPetinggi = async () =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}teams`;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek petinggi",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  }

  const getKaryawan = async () =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}teams`;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek karyawan",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  }
  

const login = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}login`;
        // const url = '../../public/data/test.json';
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(body_params),
    })
      .then((res) => res.json())
      .then((data) => { 
        setData(data);
      })
      .catch((err) => {
        setError(err);
        // // // console.log(err);
      });
    return data();
  };

  const inblog = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}inputblog`;
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // // console.log(err);
        });
    return data();
};

const getBlog = async () =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}blog`;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek petinggi",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  };

  const getJobVacancy = async () =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}job_vacancy`;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek job_vacancy",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  };
  const getClient = async () =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}client`;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek job_vacancy",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  };

  const getJoin = async () =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}getjoin`;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek job_vacancy",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  };
  const input_client = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}inputclient`;
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // // console.log(err);
        });
    return data();
};

const input_project = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}inproject`;
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // // console.log(err);
        });
    return data();
};
const getProject= async () =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}project`;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek project",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  };

  const Inputjob = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}inputjob`;
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // // console.log(err);
        });
    return data();
};

const Inputkaryawan = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}inputteams`;
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // // console.log(err);
        });
    return data();
};

const Inreg = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}regis_webinar`;
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // // console.log(error());
        });
    return data();
};

const Inreg2 = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}regis`;
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // // console.log(error());
        });
    return data();
};

const getProject2 = async () =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}blog`;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek project",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  }

  const getExplore = async () =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}explore`;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek project",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
}

const Inreg3 = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}regis`;
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // // console.log(error());
        });
    return data();
};

const Inputblog = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}inputblog`;
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // // console.log(err);
        });
    return data();
  };
  
  const Inputexplore = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}exploreinput`;
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // // console.log(err);
        });
    return data();
  };
  
  
  const updateblog = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}updateblog`;
    await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // // console.log(err);
        });
    return data();
  };
  
  
  const updateexplore = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}updateexplore`;
    await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // // console.log(err);
        });
    return data();
  };
  
  
  const deleteblog = async (id:any) =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}deleteblog?id=${id}`;
    await fetch(url, {
      method: 'DELETE',
      headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek job_vacancy",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  };
  
  const deleteexplore = async (id:any) =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}deleteexplore?id=${id}`;
    await fetch(url, {
      method: 'DELETE',
      headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek job_vacancy",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  };

  const deleteproject = async (id:any) =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}deleteproject?id=${id}`;
    await fetch(url, {
      method: "DELETE",
      headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek data project",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  };
  const deleteclient = async (id:any) =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}deleteclient?id=${id}`;
    await fetch(url, {
      method: "DELETE",
      headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek data project",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  };

  const update_project = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}updateproject`;
    await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // // console.log(err);
        });
    return data();
  };

  const updateteams = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}updateteams`;
    await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // // console.log(err);
        });
    return data();
  };

  const deleteTeams = async (id:any) =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}deleteteams?id=${id}`;
    await fetch(url, {
      method: "DELETE",
      headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek job_vacancy",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  };
  
  const getTraining = async () =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}training`;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek project",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  }

  const getTrainingDetail = async (id : number) =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}join_train?id=`+id;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek project",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  }

  const getTrainingDetailQuestions = async (id : number) =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}quiz?detail_training_id=`+id;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek project",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  }

  const deletejob = async (id:any) =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}deletejobvacancy?id=${id}`;
    await fetch(url, {
      method: 'DELETE',
      headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek job_vacancy",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  };

  const updatejobs = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}updatejob`;
    await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
            // // console.log(err);
        });
    return data();
  };


  const getBlogdetail = async (id : any) =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}join_blog?id=`+id;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek petinggi",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  };

  
const addStep = async (body_params: any) => {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
    const url = `${api}training/add_step`;
        // const url = '../../public/data/test.json';
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(body_params),
    })
      .then((res) => res.json())
      .then((data) => { 
        setData(data);
      })
      .catch((err) => {
        setError(err);
        // // // console.log(err);
      });
    return data();
  };

  
  const valid = async (id_user : any,id_detail_training : any,step : any) =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}/training/is_valid?id_user=${id_user}&id_detail_training=${id_detail_training}&step=${step}`;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek petinggi",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  };

  const nextValid = async (id_user : any,id_detail_training : any,step : any) =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}/training/next_step?id_detail_training=${id_detail_training}&id_user=${id_user}&step=${step}`;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek petinggi",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  };

  
  const validLast = async (id_user : any,id_detail_training : any,step : any) =>   {
    const [data, setData] = createSignal();
    const [error, setError] = createSignal();
  
    const url = `${api}/training/get_step?id_user=${id_user}&id_detail_training=${id_detail_training}&step=${step}`;
    await fetch(url, {headers: {"Content-type": "application/json;charset=UTF-8"}}).then((res) => res.json())
        .then((data) => {
          // // // console.log("cek petinggi",data);
            setData(data);
        }
    ).catch((err) => {
        setError(err);
        // // // console.log(error());
    });
    return data();
  };





export {
    getDetailPoi,
    getDetailPoi2,
    getSummaryNaru,
    getDataMap,
    login,
    register,
    getPetinggi,
    inblog,
    getBlog,
    getKaryawan,
    getJobVacancy,
    getClient,
    input_client,
    getProject,
    Inputjob,
    input_project,
    Inputkaryawan,
    Inreg,
    Inreg2,
    Inreg3,
    getExplore,
    getProject2,
    deleteexplore,
    deleteblog,
    updateexplore,
    updateblog,
    Inputexplore,
    Inputblog,
    deleteclient,
    deleteproject,
    update_project,
    getJoin,
    updateteams,
    deleteTeams,
    getTraining,
    getTrainingDetail,
    getTrainingDetailQuestions,
    deletejob,
    updatejobs,
    getBlogdetail,
    valid,
    addStep,
    nextValid,
    validLast

    
};

