//
//  ViewController.swift
//  ClientKata14
//
//  Created by Sergio PH on 10/10/16.
//  Copyright © 2016 Solid Gear. All rights reserved.
//

import UIKit

struct StockElement {
    var name:String!
    var description:String!
    var price:String!
    var units:String!
}

class ViewController: UIViewController {
    
    let UrlString = "http://192.168.1.103:8080/"
    let kNameJsonKey = "name"
    let kDescriptionJsonKey = "description"
    let kPriceJsonKey = "price"
    let kUnitsJsonKey = "units"
    let kProductTableViewCell = "ProductTableViewCell"
    
    var stock: [StockElement] = []
    
    @IBOutlet weak var tableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.registerCell()
        self.serverRequest()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func serverRequest() {
        self.stock = []
        let request = NSMutableURLRequest(URL: NSURL(string: UrlString)!)
        request.HTTPMethod = "GET"
        let session = NSURLSession.sharedSession()
        let task = session.dataTaskWithRequest(request) { (data, response, error) -> Void in
            guard let data = data else {
                print("error: \(error)")
                return
            }
            self.jsonParser(data)
        }
        task.resume()
    }    
    
    func jsonParser(data: NSData) {
        do {
            let jsonResponse = try NSJSONSerialization.JSONObjectWithData(data, options: .AllowFragments)
            print(jsonResponse)
            self.manageJson(jsonResponse as! [NSDictionary])
            } catch {
            print("error serializing JSON: \(error)")
        }
    }
    
    func manageJson(jsonResponse: [NSDictionary]) {
        for element in jsonResponse{
            
            let name = element.valueForKey(kNameJsonKey) as! String
            let description = element.valueForKey(kDescriptionJsonKey) as! String
            let price = (element.valueForKey(kPriceJsonKey) as! String) + "€"
            let units = element.valueForKey(kUnitsJsonKey) as! String
            
            let stockElement = StockElement(name: name, description: description, price: price, units: units)
            
            self.stock.append(stockElement)
            print("Element \(stockElement) \n")
            
            
        }
        self.tableView.reloadData()
        print("Array \(stock) \n")

    }
    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return stock.count
    }

    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell: ProductTableViewCell = tableView.dequeueReusableCellWithIdentifier(kProductTableViewCell, forIndexPath: indexPath) as! ProductTableViewCell
        
        cell.nameLabel.text = self.stock[indexPath.row].name
        cell.descriptionLabel.text = self.stock[indexPath.row].description
        cell.priceLabel.text = self.stock[indexPath.row].price
        cell.unitsLabel.text = self.stock[indexPath.row].units
        return cell
    }
    
    func registerCell() {
        self.tableView.registerNib(UINib(nibName:kProductTableViewCell, bundle: nil), forCellReuseIdentifier: kProductTableViewCell)
    }
    
}

