import React, { useDebugValue, useState, useRef } from "react";
import classes from "./Workingdays.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Calendar } from "antd";
export default function Workingdays({ whiteMode, mode }) {
  const days = {
    first: "Monday",
    second: "Tuesday",
    third: "Wednesday",
    fourth: "Thursday",
    fifth: "Friday",
    id: Math.floor(Math.random() * 1000),
  };
  const [on, setOn] = useState(true);
  const [off, setOff] = useState(true);
  const [selected, setSelected] = useState([]);
  const [radioss, setRadioss] = useState(false);
  const [radioss2, setRadioss2] = useState(false);

  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);
  const [sunday, setSunday] = useState([]);

  const [restmonday, setRestmonday] = useState([]);
  const [resttuesday, setResttuesday] = useState([]);
  const [restwednesday, setRestwednesday] = useState([]);
  const [restthursday, setRestthursday] = useState([]);
  const [restfriday, setRestfriday] = useState([]);
  const [restsaturday, setRestsaturday] = useState([]);
  const [restsunday, setRestsunday] = useState([]);

  const [style, setStyle] = useState(true);
  const [holiday, setHoliday] = useState(false);
  const [holidaylist, setHolidaylist] = useState([]);
  const [id, setId] = useState(0);

  const store = useRef(null);
  const store2 = useRef(null);

  const handleClick = () => {
    let list1 = store.current.value;
    let list2 = store2.current.value;

    //console.log(info.name)
    const info = {
      name: list1,
      date: list2,
      id: id,
    };
    setHolidaylist((oldlist) => [...oldlist, info]);

    setId(id + 1);
    console.log(id);
  };

  const deleteli = (id2) => {
    const newarr = holidaylist.filter((items) => {
      return items.id != id2;
    });
    setHolidaylist(newarr);
    console.log(holidaylist);
  };
  const deleteSide = (value) => {
    setOff(value);
  };

  const Weekends = () => {
    return (
      <>
        <div className={`${classes.radios}`}>
          <input
            type="checkbox"
            id="restmon"
            value="Monday"
            checked={restmonday.length > 0 ? true : false}
            onChange={(e) => {
              restmonday.length > 0
                ? setRestmonday([])
                : setRestmonday([...restmonday, e.target.value]);
            }}
          />
          <label htmlFor="restmon">Monday</label>

          <input
            type="checkbox"
            id="resttue"
            value="Tuesday"
            checked={resttuesday.length > 0 ? true : false}
            onChange={(e) => {
              resttuesday.length > 0
                ? setResttuesday([])
                : setResttuesday([...resttuesday, e.target.value]);
              console.log(resttuesday);
            }}
          />
          <label htmlFor="resttue">Tuesday</label>
          <input
            type="checkbox"
            id="restwed"
            value="Wednesday"
            checked={restwednesday.length > 0 ? true : false}
            onChange={(e) => {
              restwednesday.length > 0
                ? setRestwednesday([])
                : setRestwednesday([...restwednesday, e.target.value]);
            }}
          />
          <label htmlFor="restwed">Wednesday</label>

          <input
            type="checkbox"
            id="restthu"
            value="Thursday"
            checked={restthursday.length > 0 ? true : false}
            onChange={(e) => {
              restthursday.length > 0
                ? setRestthursday([])
                : setRestthursday([...restthursday, e.target.value]);
            }}
          />
          <label htmlFor="restthu">Thursday</label>
          <input
            type="checkbox"
            id="restfri"
            value="Friday"
            checked={restfriday.length > 0 ? true : false}
            onChange={(e) => {
              restfriday.length > 0
                ? setRestfriday([])
                : setRestfriday([...restfriday, e.target.value]);
            }}
          />
          <label htmlFor="restfri">Friday</label>
          <input
            type="checkbox"
            id="restsat"
            value="Saturday"
            checked={restsaturday.length > 0 ? true : false}
            onChange={(e) => {
              restsaturday.length > 0
                ? setRestsaturday([])
                : setRestsaturday([...saturday, e.target.value]);
            }}
          />
          <label htmlFor="restsat">Saturday</label>
          <input
            type="checkbox"
            id="restsun"
            value="Sunday"
            checked={restsunday.length > 0 ? true : false}
            onChange={(e) => {
              restsunday.length > 0
                ? setRestsunday([])
                : setRestsunday([...sunday, e.target.value]);
            }}
          />
          <label htmlFor="restsun">Sunday</label>
        </div>
      </>
    );
  };
  const Workdays = () => {
    return (
      <>
        <div className={`${classes.radios}`}>
          <div className={`${classes.innerradios}`}>
            <input
              type="checkbox"
              id="mon"
              value="Monday"
              checked={monday.length > 0 ? true : false}
              onChange={(e) => {
                monday.length > 0
                  ? setMonday([])
                  : setMonday([...monday, e.target.value]);
              }}
            />
            <label htmlFor="mon">Monday</label>
            <input
              type="checkbox"
              id="Tues"
              value="Tuesday"
              checked={tuesday.length > 0 ? true : false}
              onChange={(e) => {
                tuesday.length > 0
                  ? setTuesday([])
                  : setTuesday([...tuesday, e.target.value]);
              }}
            />
            <label htmlFor="Tues">Tuesday</label>
            <input
              type="checkbox"
              id="wed"
              value="Wednesday"
              checked={wednesday.length > 0 ? true : false}
              onChange={(e) => {
                wednesday.length > 0
                  ? setWednesday([])
                  : setWednesday([...wednesday, e.target.value]);
              }}
            />
            <label htmlFor="wed">Wednesday</label>
            <input
              type="checkbox"
              id="thu"
              value="Thursday"
              checked={thursday.length > 0 ? true : false}
              onChange={(e) => {
                thursday.length > 0
                  ? setThursday([])
                  : setThursday([...thursday, e.target.value]);
              }}
            />
            <label htmlFor="thu">Thusday</label>
            <input
              type="checkbox"
              id="fri"
              value="Friday"
              checked={friday.length > 0 ? true : false}
              onChange={(e) => {
                friday.length > 0
                  ? setFriday([])
                  : setFriday([...friday, e.target.value]);
              }}
            />
            <label htmlFor="fri">Friday</label>
            <input
              type="checkbox"
              id="sat"
              value="Saturday"
              checked={saturday.length > 0 ? true : false}
              onChange={(e) => {
                saturday.length > 0
                  ? setSaturday([])
                  : setSaturday([...saturday, e.target.value]);
              }}
            />
            <label htmlFor="sat">Saturday</label>
            <input
              type="checkbox"
              id="sun"
              value="Sunday"
              checked={sunday.length > 0 ? true : false}
              onChange={(e) => {
                sunday.length > 0
                  ? setSunday([])
                  : setSunday([...sunday, e.target.value]);
              }}
            />
            <label htmlFor="sun">Sunday</label>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        style={
          mode == true ? { backgroundColor: "white", height: "100vh" } : {}
        }
      >
        <Header
          whiteMode={whiteMode}
          mode={mode}
          deleteSide={deleteSide}
          value={off}
        />
        <Sidebar mode={mode} deleteSide={deleteSide} value={off} />
        <div
          className={
            mode == false
              ? `${classes.WorkingdaysWrapper}`
              : `${classes.whiteWorkingdaysWrapper}`
          }
        >
          {/* Working days*/}
          <div className={`${classes.workingdays}`}>
            <div id={`${classes.workingdayshead}`}>
              <h2>Working days</h2>
              <button
                onClick={() => {
                  setRadioss2((value) => !value);
                }}
              >
                Edit
              </button>
            </div>
            <div className={`${classes.days}`}>
              {radioss2 && <Workdays />}
              <div>
                {monday.map((days) => (
                  <li>{days}</li>
                ))}
              </div>
              <div>
                {" "}
                {tuesday.map((days) => (
                  <li>{days}</li>
                ))}
              </div>
              <div>
                {" "}
                {wednesday.map((days) => (
                  <li>{days}</li>
                ))}
              </div>
              <div>
                {" "}
                {thursday.map((days) => (
                  <li>{days}</li>
                ))}
              </div>
              <div>
                {friday.map((days) => (
                  <li>{days}</li>
                ))}
              </div>
              <div>
                {" "}
                {saturday.map((days) => (
                  <li>{days}</li>
                ))}
              </div>
              <div>
                {" "}
                {sunday.map((days) => (
                  <li>{days}</li>
                ))}
              </div>
            </div>
          </div>
          {/*Weekly leave */}
          <div className={`${classes.weeklyleave}`}>
            <div id={`${classes.weeklyleavehead}`}>
              <h2>Weekly Leave</h2>
              <div className={`${classes.days}`}>
                <button
                  onClick={() => {
                    setRadioss((value) => !value);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
            {radioss && <Weekends />}
            <div>
              {restmonday.map((days) => {
                return <li>{days}</li>;
              })}
            </div>
            <div>
              {resttuesday.map((days) => {
                return <li>{days}</li>;
              })}
            </div>
            <div>
              {restwednesday.map((days) => {
                return <li>{days}</li>;
              })}
            </div>
            <div>
              {" "}
              {restthursday.map((days) => {
                return <li>{days}</li>;
              })}
            </div>
            <div>
              {restfriday.map((days) => {
                return <li>{days}</li>;
              })}
            </div>
            <div>
              {restsaturday.map((days) => (
                <li>{days}</li>
              ))}
            </div>
            <div>
              {restsunday.map((days) => (
                <li>{days}</li>
              ))}
            </div>
          </div>
          {/*Holiday*/}
          <div className={`${classes.Holidays}`}>
            <div id={`${classes.holidayhead}`}>
              <h2>Holidays</h2>
              <div className={`${classes.days}`}>
                <button
                  onClick={() => {
                    setHoliday((prev) => (prev = !prev));
                  }}
                >
                  Add holiday
                </button>
              </div>
            </div>
            {holiday && (
              <form
                id={`${classes.holidayform}`}
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                  setHolidayinfo((oldinfo) => [
                    ...oldinfo,
                    holidayname + holidaydate,
                  ]);
                  console.log(holidayinfo);
                  setHoliday(false);
                }}
              >
                <input
                  type="text"
                  placeholder="Enter name of the Holiday"
                  ref={store}
                />
                <input type="date" ref={store2} />

                <button
                  type="submit"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Add
                </button>
              </form>
            )}
            <div id={`${classes.holidays}`}>
              {holidaylist.map((list) => {
                return (
                  <div className={`${classes.gridholiday}`} key={list.id}>
                    <div> {list.name}</div>
                    <div> {list.date}</div>
                    <button
                      onClick={() => {
                        deleteli(list.id);
                      }}
                    >
                      delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
