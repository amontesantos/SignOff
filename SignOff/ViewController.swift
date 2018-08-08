//
//  ViewController.swift
//  SignOff
//
//  Created by abdulrahman alanazi on 7/25/18.
//  Copyright © 2018 SignOff LLC. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    //MARK: Properties
    @IBOutlet weak var lastClick: UILabel!
    @IBOutlet weak var signOffbtn: UIButton!
    var startTime = Date()
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


    // MARK: Actions
    @IBAction func signoff(_ sender: UIButton) {
        if signOffbtn.title(for: .normal)=="Done" {
            signOffbtn.setTitle("SignOff", for: .normal)
            
            let currentTime = Date().timeIntervalSince(startTime)
            lastClick.text = currentTime.rounded().description
            
            
            
            
        } else {
            signOffbtn.setTitle("Done", for: .normal)
            lastClick.text = "signed off seconds will show when you click Done"
            startTime = Date()
        }
        
        
        // MARK: new function
        
        //test
        
        
    }
    
    
}

